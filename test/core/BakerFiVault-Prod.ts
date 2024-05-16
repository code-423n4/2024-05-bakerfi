import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { describeif } from "../common";

import {
  getDeployFunc,
} from "./common";

describeif(
    network.name === "ethereum_devnet" ||
    network.name === "optimism_devnet" || 
    network.name === "arbitrum_devnet" || 
    network.name === "base_devnet"
)("BakerFi - Production", function () {
  
  it("Test Initialized Vault", async function () {   
    const { deployer, vault, strategy } = await loadFixture(getDeployFunc());
    expect(await vault.symbol()).to.equal("brETH");
    expect(await vault.balanceOf(deployer.address)).to.equal(0);
    expect(await vault.totalSupply()).to.equal(0);
    expect((await strategy.getPosition(0))[0]).to.equal(0);
    expect((await strategy.getPosition(0))[1]).to.equal(0);
    expect((await strategy.getPosition(0))[2]).to.equal(0);
    expect(await vault.totalAssets()).to.equal(0);
  });

  it("Deposit 1 ETH", async function () {
    const { vault, deployer, strategy } = await loadFixture(getDeployFunc());

    const depositAmount = ethers.parseUnits("1", 18);
    await vault.deposit(deployer.address, {
      value: depositAmount,
    });
    expect(await vault.balanceOf(deployer.address))
      .to.greaterThan(ethers.parseUnits("9", 17))
      .lessThanOrEqual(ethers.parseUnits("11", 17));
    expect((await strategy.getPosition(0))[0])
      .to.greaterThan(ethers.parseUnits("40", 17))
      .lessThanOrEqual(ethers.parseUnits("46", 17));
    expect((await strategy.getPosition(0))[1])
      .to.greaterThan(ethers.parseUnits("33", 17))
      .lessThanOrEqual(ethers.parseUnits("37", 17));
    expect(await vault.totalAssets())
      .to.greaterThan(ethers.parseUnits("9", 17))
      .lessThanOrEqual(ethers.parseUnits("11", 17));
    expect((await strategy.getPosition(0))[2])
      .to.greaterThan(700000000n)
      .lessThanOrEqual(810000000n);
    expect(await vault.totalSupply())
      .to.greaterThan(ethers.parseUnits("9", 17))
      .lessThanOrEqual(ethers.parseUnits("11", 17));
    expect(await vault.tokenPerETH())
      .to.greaterThan(ethers.parseUnits("9", 17))
      .lessThanOrEqual(ethers.parseUnits("11", 17));
  });

  it("Deposit + Withdraw", async function () {
    const { vault, settings, deployer, strategy} = await loadFixture(getDeployFunc());
    const depositAmount = ethers.parseUnits("10", 18);

    await strategy.setLoanToValue(ethers.parseUnits("500", 6));

    await vault.deposit(deployer.address, {
      value: depositAmount,
    });

    const provider = ethers.provider;
    const balanceBefore = await provider.getBalance(deployer.address);
    await vault.withdraw(ethers.parseUnits("5", 18));
    expect(await vault.balanceOf(deployer.address))
      .to.greaterThan(ethers.parseUnits("4", 18))
      .lessThanOrEqual(ethers.parseUnits("6", 18));
    expect((await strategy.getPosition(0))[0])
      .to.greaterThan(ethers.parseUnits("9", 18))
      .lessThanOrEqual(ethers.parseUnits("11", 18));
    expect((await strategy.getPosition(0))[1])
      .to.greaterThan(ethers.parseUnits("4", 18))
      .lessThanOrEqual(ethers.parseUnits("6", 18));
    expect(await vault.totalAssets())
      .to.greaterThan(ethers.parseUnits("4", 18))
      .lessThanOrEqual(ethers.parseUnits("6", 18));
    expect((await strategy.getPosition(0))[2])
      .to.greaterThan(400000000n)
      .lessThanOrEqual(600000000n);
    expect(await vault.totalSupply())
      .to.greaterThan(ethers.parseUnits("4", 18))
      .lessThanOrEqual(ethers.parseUnits("6", 18));
    expect(await vault.tokenPerETH())
      .to.greaterThan(ethers.parseUnits("9", 17))
      .lessThanOrEqual(ethers.parseUnits("11", 17));
    const balanceAfter = await provider.getBalance(deployer.address);
    expect(balanceAfter - balanceBefore)
      .greaterThan(ethers.parseUnits("4", 18))
      .lessThanOrEqual(ethers.parseUnits("11", 18));
  });

  it("Liquidation Protection - Adjust Debt", async function () {
    const { vault, strategy, settings, aave3Pool, weth, deployer, wstETH } =
      await loadFixture(getDeployFunc());

    await strategy.setLoanToValue(ethers.parseUnits("500", 6));
    await strategy.setMaxLoanToValue(ethers.parseUnits("510", 6));

    const depositAmount = ethers.parseUnits("1", 18);

    await expect(
      vault.deposit(deployer.address, {
        value: depositAmount,
      })
    )
      .to.emit(strategy, "StrategyAmountUpdate")
      .withArgs((value) => {
        return value >= 971432545612539374n;
      });

    await strategy.setLoanToValue(ethers.parseUnits("400", 6));
    await strategy.setMaxLoanToValue(ethers.parseUnits("400", 6));

    await expect(vault.rebalance())
      .to.emit(strategy, "StrategyAmountUpdate")
      .withArgs((value) => {
        return value >= 902114986650737323n;
      });
    expect((await strategy.getPosition(0))[2])
      .to.greaterThan(300000000n)
      .lessThanOrEqual(410000000n);
  });

  it("Deposit and Withdraw and pay the fee", async function () {      
    const { deployer, vault, settings } = await loadFixture(getDeployFunc());
    const feeReceiver = "0x1260E3ca7aD848498e3D6446FBcBc7c7A0717607";
    
    await settings.setFeeReceiver(feeReceiver);      
    // Fees are 10%
    await settings.setWithdrawalFee(ethers.parseUnits("100", 6));      

    await vault.deposit(deployer.address, {
        value:  ethers.parseUnits("10", 18),
    });        
    const balanceBefore = await ethers.provider.getBalance(feeReceiver);
    
    await vault.withdraw(ethers.parseUnits("5", 18));

    const provider = ethers.provider;
    const balanceAfter = await provider.getBalance(feeReceiver);
    const balanceDiff  = balanceAfter - balanceBefore;
    
    expect(balanceDiff)
        .to.greaterThan(ethers.parseUnits("4", 17))
        .lessThanOrEqual(ethers.parseUnits("6", 17));
  });

  it("Deposit and Withdraw all the shares from a user", async function () {        
    const { deployer, vault, strategy} = await loadFixture(getDeployFunc());
   
    await vault.deposit(deployer.address, {
        value:  ethers.parseUnits("10", 18),
    });         
    const balanceOf = await vault.balanceOf(deployer.address);
    const withrawing = balanceOf;
    await vault.withdraw(withrawing);
    expect(await vault.balanceOf(deployer.address)).to.equal(0n);
    expect(await vault.totalSupply()).to.equal(0n);
    expect((await strategy.getPosition(0))[0]).to.equal(1n);
    expect((await strategy.getPosition(0))[1]).to.equal(0n);
    expect((await strategy.getPosition(0))[2]).to.equal(0n);
    expect(await vault.tokenPerETH()).to.equal(ethers.parseUnits("1", 18));
});
  
});

