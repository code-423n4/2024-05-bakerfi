
# BakerFi audit details
- Total Prize Pool: $28,500 in USDC
  - HM awards: $23,040 in USDC
  - QA awards: $960 in USDC
  - Judge awards: $4,000 in USDC
  - Scout awards: $500 in USDC
  - (this line can be removed if there is no mitigation) Mitigation Review: XXX XXX USDC (*Opportunity goes to top 3 backstage wardens based on placement in this audit who RSVP.*)
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2024-05-bakerfi/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts May 20, 2024 20:00 UTC
- Ends June 3, 2024 20:00 UTC

## This is a Private audit

This audit repo and its Discord channel are accessible to **certified wardens only.** Participation in private audits is bound by:

1. Code4rena's [Certified Contributor Terms and Conditions](https://github.com/code-423n4/code423n4.com/blob/main/_data/pages/certified-contributor-terms-and-conditions.md)
2. C4's [Certified Contributor Code of Professional Conduct](https://code4rena.notion.site/Code-of-Professional-Conduct-657c7d80d34045f19eee510ae06fef55)

*All discussions regarding private audits should be considered private and confidential, unless otherwise indicated.*



## Automated Findings / Publicly Known Issues

The 4naly3er report can be found [here](https://github.com/code-423n4/2024-05-bakerfi/blob/main/4naly3er-report.md).



_Note for C4 wardens: Anything included in this `Automated Findings / Publicly Known Issues` section is considered a publicly known issue and is ineligible for awards._


## Overview

# Bakerfi Smart Contracts

Recursive ETH Staking made easy, amplify your yields with recursive based strategies based on lending markets (AAVE v3, ...) and flash loans.

## Features

* Pool Based Yield Generation
* Liquidation Protection
* Easy to Use Interface
* Leverage based on Flash Loans
* Liquid Yield Shares matETH 
* Proxied Deployment for Settings, Vault and Strategies

## Integrations 
* AAVE v3 
* Lido Staking Contracts
* Uniswap v3
* Balancer Flash Loans



## Links

- **Previous audits:** https://github.com/code-423n4/2024-05-bakerfi/blob/main/audits/audit-creed-2024-05-10.pdf
- **Documentation:** https://github.com/code-423n4/2024-05-bakerfi/tree/main/doc
- **Website:** https://bakerfi.xyz/
- **X/Twitter:** https://twitter.com/bakerfi_
- **Discord:** https://dub.sh/bakerfi-discord

---

# Scope

*See [scope.txt](https://github.com/code-423n4/2024-05-bakerfi/blob/main/scope.txt)*

### Files in scope


| File   | Logic Contracts | Interfaces | SLOC  | Purpose | Libraries used |
| ------ | --------------- | ---------- | ----- | -----   | ------------ |
| [/contracts/core/Constants.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/Constants.sol) | ****| **** | 6 | ||
| [/contracts/core/GovernableOwnable.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/GovernableOwnable.sol) | 1| **** | 27 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| [/contracts/core/ServiceRegistry.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/ServiceRegistry.sol) | 1| **** | 49 | |@openzeppelin/contracts/access/Ownable.sol|
| [/contracts/core/Settings.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/Settings.sol) | 1| **** | 97 | |@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol<br>@openzeppelin/contracts/utils/structs/EnumerableSet.sol|
| [/contracts/core/Vault.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/Vault.sol) | 1| **** | 172 | |@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| [/contracts/core/flashloan/BalancerFlashLender.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/flashloan/BalancerFlashLender.sol) | 1| **** | 83 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashLenderUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashBorrowerUpgradeable.sol|
| [/contracts/core/governance/BKR.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/governance/BKR.sol) | 1| **** | 29 | |@openzeppelin/contracts/token/ERC20/ERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol<br>@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol|
| [/contracts/core/governance/BakerFiGovernor.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/governance/BakerFiGovernor.sol) | 1| **** | 86 | |@openzeppelin/contracts/governance/Governor.sol<br>@openzeppelin/contracts/governance/compatibility/GovernorCompatibilityBravo.sol<br>@openzeppelin/contracts/governance/extensions/GovernorVotes.sol<br>@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol<br>@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol|
| [/contracts/core/governance/Timelock.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/governance/Timelock.sol) | 1| **** | 9 | |@openzeppelin/contracts/governance/TimelockController.sol|
| [/contracts/core/hooks/UseAAVEv3.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseAAVEv3.sol) | 1| **** | 22 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseFlashLender.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseFlashLender.sol) | 1| **** | 21 | |@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashLenderUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseIERC20.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseIERC20.sol) | 1| **** | 19 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseLeverage.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseLeverage.sol) | 1| **** | 51 | ||
| [/contracts/core/hooks/UseOracle.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseOracle.sol) | 1| **** | 22 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseSettings.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseSettings.sol) | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseStETH.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseStETH.sol) | 1| **** | 19 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseStrategy.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseStrategy.sol) | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseSwapper.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseSwapper.sol) | 1| **** | 75 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseUniQuoter.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseUniQuoter.sol) | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseWETH.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseWETH.sol) | 1| **** | 27 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/hooks/UseWstETH.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/hooks/UseWstETH.sol) | 1| **** | 36 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/strategies/StrategyAAVEv3.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/strategies/StrategyAAVEv3.sol) | 1| **** | 73 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| [/contracts/core/strategies/StrategyAAVEv3WSTETH.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/strategies/StrategyAAVEv3WSTETH.sol) | 1| **** | 59 | |@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| [/contracts/core/strategies/StrategyLeverage.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/strategies/StrategyLeverage.sol) | 1| **** | 378 | |@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashBorrowerUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| [/contracts/core/strategies/StrategyLeverageSettings.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/core/strategies/StrategyLeverageSettings.sol) | 1| **** | 52 | ||
| [/contracts/libraries/RebaseLibrary.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/libraries/RebaseLibrary.sol) | 1| **** | 35 | ||
| [/contracts/oracles/EthOracle.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/oracles/EthOracle.sol) | 1| **** | 26 | ||
| [/contracts/oracles/PythOracle.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/oracles/PythOracle.sol) | 1| **** | 50 | ||
| [/contracts/oracles/WstETHToETHOracle.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/oracles/WstETHToETHOracle.sol) | 1| **** | 26 | ||
| [/contracts/oracles/WstETHToETHOracleETH.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/oracles/WstETHToETHOracleETH.sol) | 1| **** | 32 | ||
| [/contracts/oracles/cbETHToETHOracle.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/oracles/cbETHToETHOracle.sol) | 1| **** | 27 | ||
| [/contracts/proxy/BakerFiProxy.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/proxy/BakerFiProxy.sol) | 1| **** | 9 | |@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol|
| [/contracts/proxy/BakerFiProxyAdmin.sol](https://github.com/code-423n4/2024-05-bakerfi/blob/main/contracts/proxy/BakerFiProxyAdmin.sol) | 1| **** | 9 | |@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol|
| **Totals** | **32** | **** | **1683** | | |

### Files out of scope


*See [out_of_scope.txt](https://github.com/code-423n4/2024-05-bakerfi/blob/main/out_of_scope.txt)*

| File         |
| ------------ |
| ./contracts/interfaces/aave/v3/DataTypes.sol |
| ./contracts/interfaces/aave/v3/IPoolAddressesProvider.sol |
| ./contracts/interfaces/aave/v3/IPoolV3.sol |
| ./contracts/interfaces/balancer/IFlashLoan.sol |
| ./contracts/interfaces/balancer/IProtocolFeesCollector.sol |
| ./contracts/interfaces/balancer/IVault.sol |
| ./contracts/interfaces/chainlink/IChainlinkAggregator.sol |
| ./contracts/interfaces/core/IOracle.sol |
| ./contracts/interfaces/core/IServiceRegistry.sol |
| ./contracts/interfaces/core/ISettings.sol |
| ./contracts/interfaces/core/IStrategy.sol |
| ./contracts/interfaces/core/ISwapHandler.sol |
| ./contracts/interfaces/core/IVault.sol |
| ./contracts/interfaces/curve/ICurvePool.sol |
| ./contracts/interfaces/lido/IStETH.sol |
| ./contracts/interfaces/lido/IWStETH.sol |
| ./contracts/interfaces/pyth/IPyth.sol |
| ./contracts/interfaces/pyth/IPythEvents.sol |
| ./contracts/interfaces/pyth/PythStructs.sol |
| ./contracts/interfaces/tokens/IWETH.sol |
| ./contracts/interfaces/uniswap/v3/IQuoterV2.sol |
| ./contracts/interfaces/uniswap/v3/ISwapRouter.sol |
| ./contracts/interfaces/uniswap/v3/IUniswapV3Pool.sol |
| ./contracts/mocks/AAVE3PoolMock.sol |
| ./contracts/mocks/BalancerVaultMock.sol |
| ./contracts/mocks/BorrowerAttacker.sol |
| ./contracts/mocks/ERC20Mock.sol |
| ./contracts/mocks/ERC3156FlashBorrowerMock.sol |
| ./contracts/mocks/ERC3156FlashLender.sol |
| ./contracts/mocks/OracleMock.sol |
| ./contracts/mocks/PythMock.sol |
| ./contracts/mocks/QuoterV2Mock.sol |
| ./contracts/mocks/SettingsV2.sol |
| ./contracts/mocks/StrategyLeverageSettingsMock.sol |
| ./contracts/mocks/StrategyMock.sol |
| ./contracts/mocks/UniV3RouterMock.sol |
| ./contracts/mocks/WETH.sol |
| ./contracts/mocks/WstETH.sol |
| ./contracts/tests/BoringRebaseTest.sol |
| ./contracts/tests/RebaseLibraryTest.sol |
| ./contracts/tests/VaultFuzzing.sol |
| Totals: 41 |

## Scoping Q &amp; A

### General questions


| Question                                | Answer                       |
| --------------------------------------- | ---------------------------- |
| ERC20 used by the protocol              |       Any (all possible ERC20s) WETH, USDC, USDT, RETH, STETH, WSETH             |
| Test coverage                           | Lines: 78,85%, Functions: 60,47%                         |
| ERC721 used  by the protocol            |            None              |
| ERC777 used by the protocol             |           None                |
| ERC1155 used by the protocol            |              None            |
| Chains the protocol will be deployed on | Arbitrum,Optimism,Base,Ethereum |

### ERC20 token behaviors in scope

| Question                                                                                                                                                   | Answer |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [Missing return values](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#missing-return-values)                                                      |   Yes  |
| [Fee on transfer](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#fee-on-transfer)                                                                  |  Yes  |
| [Balance changes outside of transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#balance-modifications-outside-of-transfers-rebasingairdrops) | Yes    |
| [Upgradeability](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#upgradable-tokens)                                                                 |   Yes  |
| [Flash minting](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#flash-mintable-tokens)                                                              | Yes    |
| [Pausability](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#pausable-tokens)                                                                      | Yes    |
| [Approval race protections](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#approval-race-protections)                                              | Yes    |
| [Revert on approval to zero address](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-approval-to-zero-address)                            | Yes    |
| [Revert on zero value approvals](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-approvals)                                    | Yes    |
| [Revert on zero value transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-transfers)                                    | Yes    |
| [Revert on transfer to the zero address](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-transfer-to-the-zero-address)                    | Yes    |
| [Revert on large approvals and/or transfers](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-large-approvals--transfers)                  | Yes    |
| [Doesn't revert on failure](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#no-revert-on-failure)                                                   |  Yes   |
| [Multiple token addresses](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#revert-on-zero-value-transfers)                                          | Yes    |
| [Low decimals ( < 6)](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#low-decimals)                                                                 |   No  |
| [High decimals ( > 18)](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#high-decimals)                                                              | No    |
| [Blocklists](https://github.com/d-xo/weird-erc20?tab=readme-ov-file#tokens-with-blocklists)                                                                | Yes    |

### External integrations (e.g., Uniswap) behavior in scope:


| Question                                                  | Answer |
| --------------------------------------------------------- | ------ |
| Enabling/disabling fees (e.g. Blur disables/enables fees) | Yes   |
| Pausability (e.g. Uniswap pool gets paused)               |  No   |
| Upgradeability (e.g. Uniswap gets upgraded)               |   No  |


### EIP compliance checklist
None


# Additional context

## Main invariants

- Only the Governor should be able to update Global Settings

- Only the Governorwer should be able to update the Strategy Settings

- Only the Vault should be able to call Strategy's `deploy`, `undeploy` and `harvest` functions

- No external user should access have control of the strategy funds.

- Only the owner of Vault shares can burn its shares to withdraw funds from the strategy.

- It is not possible to mint new shares without depositing ETH on the vault


## Attack ideas (where to focus for bugs)
- Vault Share Inflation and Deflation attacks.

- Manipulated Withdraws.


## All trusted roles in the protocol

 

| Role                                | Description                       |
| --------------------------------------- | ---------------------------- |
| Governor                          |                |
| User                             |                       |

## Any novel or unique curve logic or mathematical models implemented in the contracts:

None

## Running tests



```bash
git clone https://github.com/code-423n4/2024-05-bakerfi.git
git submodule update --init --recursive
cd 2024-05-bakerfi
npm install
npx hardhat compile
npm run test

```
To run code coverage
```bash
npm run test:coverage
```
To run gas benchmarks
```bash
npm run test:gas
```

## Prerequisites
Before getting started with this project, make sure you have the following prerequisites:

* Node.js (version 18 or higher)
* NPM (version 9.0 or higher)
* Hardhat (version 2.0.0 or higher)
* Ethereum wallet or provider (e.g., MetaMask)
* Solidity development knowledge


## Installation
1. Clone the project repository to your local machine:

```
git clone https://github.com/code-423n4/2024-05-bakerfi.git
```

2. Navigate to the project directory:

```
cd 2024-05-bakerfi
```

3. Install the dependencies:

```
npm install
```

## Usage

### Compiling Smart Contracts
To compile the smart contracts, run the following command:

```
npx hardhat compile
```

The compiled artifacts will be placed in the ./artifacts directory.

### Running Tests
To run the automated tests, execute the following command:

```
npm run test

# With Gas Report 
npm run test:gas

# With Gas Report + Test Coverage 
npm run test:coverage
```

This will execute the tests defined in the ./test directory.

## Deployment
To deploy your smart contracts to a specific network, configure the network settings in the hardhat.config.js file. Then, run the deployment script using the following command:

### Production 
```
npx hardhat run --network <network-name> scripts/deploy.ts
```

### Local Development (Ganache)

```
# Open a terminal to run Ganache
npm run ganache:dev 
# Open a separate terminal to run the deployment script
npx hardhat run scripts/deploy-dev.ts
```

Replace <network-name> with the desired network from your configuration.


## Create an SDK packager 


```
npm run compile:clean && npm run build
```

```
npm pack
```

### Setup Development Environment 

1. Start ganache with the predefined accounts

```
npm run ganache:dev
```

This will start a local Ethereum network with accounts pre-loaded with test Ether. The server will output the available accounts and their private keys.


2. Deploy the Vault Contract with Mocks Deployed

```
npm run deploy:local
```

If everything runs sucessfully you should get Bakerfi Vault deployed with some mocked Services for testing purposes
```
Service Registry = 0x37ebdd9B2adC5f8af3993256859c1Ea3BFE1465e
WETH = 0xd7630A747b24b7245ff60e3095aD04684dC1a292
FlashLender Mock = 0x5Ac32814f9EB4d415779892890a216b244FcB3B5
stETH = 0x2C263d29775dC27167c58aB7B18dc6C942c141B0
wstETH = 0x27F56eb75a1EBbE7e7218e8fCa5FF51E3d655f22
Swap Router Mock = 0x26A76D21edD8049fd394786976EF578010569FcB
AAVE v3 Mock = 0x621e8cdBc878Bdda95d0247B71FeBE0a8b2d4EE3
BakerFi Vault = 0xE8A1e868E4736669b73B9E26BE22129bD6B4E83d 
BakerFi Vault AAVEv3 Strategy = 0xC5Dfa3ebaDD8cf122b2b086e3aC28492Da76a0eE
WSETH/ETH Oracle = 0xE8F362bF1E066547113981FdaC7c1dDC6949a7Ac
```

### Development CLI Commands 

#### Get the Network Deployment Addresses 

```
#HARDHAT_NETWORK=base_devnet npx ts-node --files scripts/cli.ts  contracts <serviceRegistryAddress>
HARDHAT_NETWORK=base_devnet npx ts-node --files scripts/cli.ts  contracts 0xE8A1e868E4736669b73B9E26BE22129bD6B4E83d
```

### Interacting with Contracts
You can interact with the deployed contracts using the Hardhat console. Start the console with the following command:

```
npx hardhat console --network <network-name>
```

Replace <network-name> with the desired network from your configuration.


### Usefull Scripts

**Export Flat File Contracts**

```
npm run export:flat
``` 

**Generate Documentation**
```
npm run doc 
```

**Run Echidna for Testing**

```
echidna . --config echidna.yaml  --contract VaultFuzzing
```

**Verify a contract** 

```
npx hardhat verify --network mainnet <contract_address> <args>...
```


<pre>·-------------------------------------------------|---------------------------|-----------|-----------------------------·
|              <font color="#5E5C64">Solc version: 0.4.21</font>               ·  <font color="#5E5C64">Optimizer enabled: true</font>  ·  <font color="#5E5C64">Runs: 0</font>  ·  <font color="#5E5C64">Block limit: 30000000 gas</font>  │
··················································|···························|···········|······························
|  <font color="#26A269"><b>Methods</b></font>                                                                                                              │
······················|···························|·············|·············|···········|··············|···············
|  <b>Contract</b>           ·  <b>Method</b>                   ·  <font color="#26A269">Min</font>        ·  <font color="#26A269">Max</font>        ·  <font color="#26A269">Avg</font>      ·  <b># calls</b>     ·  <b>usdc (avg)</b>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">AaveV3PoolMock</font>     ·  setCollateralPerEth      ·          -  ·          -  ·    26520  ·           <font color="#5E5C64">3</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">BakerFiProxyAdmin</font>  ·  upgrade                  ·          -  ·          -  ·    39082  ·           <font color="#5E5C64">2</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">BorrowerAttacker</font>   ·  initialize               ·          -  ·          -  ·    76981  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">ERC20Mock</font>          ·  approve                  ·          -  ·          -  ·    46307  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">ERC20Mock</font>          ·  transfer                 ·      <font color="#2AA1B3">51438</font>  ·      <font color="#C01C28">51450</font>  ·    51448  ·           <font color="#5E5C64">5</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">FlashBorrowerMock</font>  ·  flashme                  ·          -  ·          -  ·   126864  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">FlashBorrowerMock</font>  ·  initialize               ·          -  ·          -  ·    51674  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">GovernableOwnable</font>  ·  transferGovernorship     ·          -  ·          -  ·    35863  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">MockFlashLender</font>    ·  setFlashLoanFee          ·      <font color="#2AA1B3">21670</font>  ·      <font color="#C01C28">26506</font>  ·    22879  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">OracleMock</font>         ·  setLatestPrice           ·      <font color="#2AA1B3">31501</font>  ·      <font color="#C01C28">31537</font>  ·    31532  ·          <font color="#5E5C64">16</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">ProxyAdmin</font>         ·  transferOwnership        ·      <font color="#2AA1B3">35818</font>  ·      <font color="#C01C28">54987</font>  ·    45402  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">PythMock</font>           ·  updatePriceFeeds         ·      <font color="#2AA1B3">42107</font>  ·      <font color="#C01C28">42899</font>  ·    42503  ·           <font color="#5E5C64">2</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">PythOracle</font>         ·  getAndUpdatePrice        ·          -  ·          -  ·    51710  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">ServiceRegistry</font>    ·  registerService          ·      <font color="#2AA1B3">48265</font>  ·      <font color="#C01C28">48277</font>  ·    48276  ·          <font color="#5E5C64">58</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">ServiceRegistry</font>    ·  unregisterService        ·          -  ·          -  ·    25582  ·           <font color="#5E5C64">3</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  acceptOwnership          ·      <font color="#2AA1B3">35404</font>  ·      <font color="#C01C28">35492</font>  ·    35448  ·           <font color="#5E5C64">2</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  enableAccount            ·          -  ·          -  ·    99849  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setFeeReceiver           ·          -  ·          -  ·    54443  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setMaxDepositInETH       ·          -  ·          -  ·    54089  ·           <font color="#5E5C64">5</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setPerformanceFee        ·          -  ·          -  ·    37022  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setPriceMaxAge           ·      <font color="#2AA1B3">34143</font>  ·      <font color="#C01C28">36943</font>  ·    36593  ·           <font color="#5E5C64">8</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setRebalancePriceMaxAge  ·      <font color="#2AA1B3">36995</font>  ·      <font color="#C01C28">37007</font>  ·    37003  ·           <font color="#5E5C64">3</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Settings</font>           ·  setWithdrawalFee         ·          -  ·          -  ·    37043  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  deploy                   ·     <font color="#2AA1B3">497140</font>  ·     <font color="#C01C28">503237</font>  ·   500570  ·          <font color="#5E5C64">16</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  harvest                  ·     <font color="#2AA1B3">109525</font>  ·     <font color="#C01C28">361466</font>  ·   184627  ·           <font color="#5E5C64">7</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  setLoanToValue           ·          -  ·          -  ·    39082  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  setMaxLoanToValue        ·      <font color="#2AA1B3">36316</font>  ·      <font color="#C01C28">39149</font>  ·    38430  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  setNrLoops               ·          -  ·          -  ·    37039  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyAAVEv3</font>     ·  undeploy                 ·          -  ·          -  ·   386597  ·           <font color="#5E5C64">3</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyMock</font>       ·  setHarvestPerCall        ·          -  ·          -  ·    43572  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">StrategyMock</font>       ·  setRatio                 ·          -  ·          -  ·    26482  ·           <font color="#5E5C64">2</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">UniV3RouterMock</font>    ·  setPrice                 ·          -  ·          -  ·    26452  ·           <font color="#5E5C64">5</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Vault</font>              ·  deposit                  ·     <font color="#2AA1B3">140997</font>  ·     <font color="#C01C28">646163</font>  ·   518615  ·          <font color="#5E5C64">59</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Vault</font>              ·  pause                    ·          -  ·          -  ·    54007  ·           <font color="#5E5C64">4</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Vault</font>              ·  rebalance                ·     <font color="#2AA1B3">100361</font>  ·     <font color="#C01C28">415438</font>  ·   247893  ·           <font color="#5E5C64">8</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Vault</font>              ·  unpause                  ·          -  ·          -  ·    32062  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">Vault</font>              ·  withdraw                 ·     <font color="#2AA1B3">407403</font>  ·     <font color="#C01C28">488548</font>  ·   443891  ·          <font color="#5E5C64">20</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">WETH</font>               ·  deposit                  ·          -  ·          -  ·    44981  ·          <font color="#5E5C64">15</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">WETH</font>               ·  transfer                 ·      <font color="#2AA1B3">46991</font>  ·      <font color="#C01C28">47003</font>  ·    47000  ·          <font color="#5E5C64">15</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">WstETHMock</font>         ·  transfer                 ·          -  ·          -  ·    46707  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#5E5C64">WstETHMock</font>         ·  wrap                     ·          -  ·          -  ·   109889  ·           <font color="#5E5C64">1</font>  ·           <font color="#5E5C64">-</font>  │
······················|···························|·············|·············|···········|··············|···············
|  <font color="#26A269"><b>Deployments</b></font>                                    ·                                       ·  <b>% of limit</b>  ·              │
··················································|·············|·············|···········|··············|···············
|  AaveV3PoolMock                                 ·          -  ·          -  ·  3902555  ·        <font color="#5E5C64">13 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  BakerFiProxy                                   ·     <font color="#2AA1B3">741140</font>  ·    <font color="#C01C28">1114029</font>  ·   854590  ·       <font color="#5E5C64">2.8 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  BakerFiProxyAdmin                              ·          -  ·          -  ·   446194  ·       <font color="#5E5C64">1.5 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  BalancerFlashLender                            ·          -  ·          -  ·   974857  ·       <font color="#5E5C64">3.2 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  BalancerVaultMock                              ·          -  ·          -  ·   485003  ·       <font color="#5E5C64">1.6 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  BorrowerAttacker                               ·          -  ·          -  ·   544937  ·       <font color="#5E5C64">1.8 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  ERC20Mock                                      ·     <font color="#2AA1B3">744414</font>  ·     <font color="#C01C28">744486</font>  ·   744448  ·       <font color="#5E5C64">2.5 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  FlashBorrowerMock                              ·          -  ·          -  ·   444283  ·       <font color="#5E5C64">1.5 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  MockFlashLender                                ·          -  ·          -  ·   656892  ·       <font color="#5E5C64">2.2 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  OracleMock                                     ·          -  ·          -  ·   188741  ·       <font color="#5E5C64">0.6 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  PythMock                                       ·          -  ·          -  ·   873172  ·       <font color="#5E5C64">2.9 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  PythOracle                                     ·          -  ·          -  ·   541997  ·       <font color="#5E5C64">1.8 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  QuoterV2Mock                                   ·          -  ·          -  ·   334427  ·       <font color="#5E5C64">1.1 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  RebaseLibrary                                  ·          -  ·          -  ·    72217  ·       <font color="#5E5C64">0.2 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  RebaseLibraryTest                              ·          -  ·          -  ·   192805  ·       <font color="#5E5C64">0.6 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  ServiceRegistry                                ·          -  ·          -  ·   413319  ·       <font color="#5E5C64">1.4 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  Settings                                       ·          -  ·          -  ·   712720  ·       <font color="#5E5C64">2.4 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  SettingsV2                                     ·          -  ·          -  ·   716614  ·       <font color="#5E5C64">2.4 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  StrategyAAVEv3                                 ·          -  ·          -  ·  4137706  ·      <font color="#5E5C64">13.8 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  StrategyAAVEv3WstETH                           ·          -  ·          -  ·  4532719  ·      <font color="#5E5C64">15.1 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  StrategyLeverageSettingsMock                   ·          -  ·          -  ·   557933  ·       <font color="#5E5C64">1.9 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  StrategyMock                                   ·          -  ·          -  ·   310933  ·         <font color="#5E5C64">1 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  UniV3RouterMock                                ·          -  ·          -  ·   794096  ·       <font color="#5E5C64">2.6 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  UseLeverage                                    ·          -  ·          -  ·   245540  ·       <font color="#5E5C64">0.8 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  Vault                                          ·          -  ·          -  ·  2847336  ·       <font color="#5E5C64">9.5 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  WETH                                           ·          -  ·          -  ·   447889  ·       <font color="#5E5C64">1.5 %</font>  ·           <font color="#5E5C64">-</font>  │
··················································|·············|·············|···········|··············|···············
|  WstETHMock                                     ·          -  ·          -  ·   967199  ·       <font color="#5E5C64">3.2 %</font>  ·           <font color="#5E5C64">-</font>  │
·-------------------------------------------------|-------------|-------------|-----------|--------------|--------------·
</pre>
<pre>-----------------------------------|----------|----------|----------|----------|----------------|
File                               |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------------------|----------|----------|----------|----------|----------------|
 <font color="#26A269"><b>core/                            </b></font> |<font color="#26A269"><b>    97.73</b></font> |<font color="#A2734C"><b>     78.7</b></font> |<font color="#26A269"><b>    97.56</b></font> |<font color="#26A269"><b>    98.26</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>Constants.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>GovernableOwnable.sol           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>     87.5</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ServiceRegistry.sol             </b></font> |<font color="#26A269"><b>    88.89</b></font> |<font color="#26A269"><b>       80</b></font> |<font color="#26A269"><b>    83.33</b></font> |<font color="#26A269"><b>    90.91</b></font> |<font color="#C01C28"><b>            109</b></font> |
  <font color="#26A269"><b>Settings.sol                    </b></font> |<font color="#26A269"><b>       96</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>     97.3</b></font> |<font color="#C01C28"><b>            125</b></font> |
  <font color="#26A269"><b>Vault.sol                       </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>    79.63</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>core/flashloan/                  </b></font> |<font color="#26A269"><b>    95.65</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>    86.21</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>BalancerFlashLender.sol         </b></font> |<font color="#26A269"><b>    95.65</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>    86.21</b></font> |<font color="#C01C28"><b>  44,63,125,129</b></font> |
 <font color="#C01C28"><b>core/governance/                 </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#C01C28"><b>BKR.sol                         </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b> 30,31,39,43,47</b></font> |
  <font color="#C01C28"><b>BakerFiGovernor.sol             </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 6,85,94,100</b></font> |
  <font color="#26A269"><b>Timelock.sol                    </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>core/hooks/                      </b></font> |<font color="#26A269"><b>    84.13</b></font> |<font color="#A2734C"><b>    53.75</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#26A269"><b>    83.91</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>UseAAVEv3.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>UseFlashLender.sol              </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>UseIERC20.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>UseLeverage.sol                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>    92.86</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#C01C28"><b>UseOracle.sol                   </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>    18,19,23,27</b></font> |
  <font color="#A2734C"><b>UseSettings.sol                 </b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#C01C28"><b>             23</b></font> |
  <font color="#A2734C"><b>UseStETH.sol                    </b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#C01C28"><b>             24</b></font> |
  <font color="#A2734C"><b>UseStrategy.sol                 </b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#C01C28"><b>             20</b></font> |
  <font color="#26A269"><b>UseSwapper.sol                  </b></font> |<font color="#26A269"><b>    93.33</b></font> |<font color="#A2734C"><b>    55.56</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#26A269"><b>    88.89</b></font> |<font color="#C01C28"><b>          50,79</b></font> |
  <font color="#A2734C"><b>UseUniQuoter.sol                </b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#C01C28"><b>             24</b></font> |
  <font color="#26A269"><b>UseWETH.sol                     </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#A2734C"><b>UseWstETH.sol                   </b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#C01C28"><b>       30</b></font> |<font color="#A2734C"><b>       60</b></font> |<font color="#A2734C"><b>       60</b></font> |<font color="#C01C28"><b>    66,67,76,77</b></font> |
 <font color="#26A269"><b>core/strategies/                 </b></font> |<font color="#26A269"><b>    98.52</b></font> |<font color="#A2734C"><b>    67.42</b></font> |<font color="#26A269"><b>    97.22</b></font> |<font color="#26A269"><b>    94.25</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>StrategyAAVEv3.sol              </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>    94.44</b></font> |<font color="#C01C28"><b>            128</b></font> |
  <font color="#26A269"><b>StrategyAAVEv3WSTETH.sol        </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>StrategyLeverage.sol            </b></font> |<font color="#26A269"><b>    97.89</b></font> |<font color="#A2734C"><b>    70.21</b></font> |<font color="#26A269"><b>    94.44</b></font> |<font color="#26A269"><b>     92.8</b></font> |<font color="#C01C28"><b>... 519,565,751</b></font> |
  <font color="#26A269"><b>StrategyLeverageSettings.sol    </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>    68.18</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/aave/v3/              </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>DataTypes.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IPoolAddressesProvider.sol      </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IPoolV3.sol                     </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/balancer/             </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IFlashLoan.sol                  </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IProtocolFeesCollector.sol      </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IVault.sol                      </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/chainlink/            </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IChainlinkAggregator.sol        </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/core/                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IOracle.sol                     </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IServiceRegistry.sol            </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ISettings.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IStrategy.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ISwapHandler.sol                </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IVault.sol                      </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/curve/                </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ICurvePool.sol                  </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/lido/                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IStETH.sol                      </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IWStETH.sol                     </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/pyth/                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IPyth.sol                       </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IPythEvents.sol                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>PythStructs.sol                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/tokens/               </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IWETH.sol                       </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>interfaces/uniswap/v3/           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IQuoterV2.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ISwapRouter.sol                 </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>IUniswapV3Pool.sol              </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#26A269"><b>libraries/                       </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>       80</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>RebaseLibrary.sol               </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>       80</b></font> |<font color="#C01C28"><b>          42,58</b></font> |
 <font color="#A2734C"><b>mocks/                           </b></font> |<font color="#A2734C"><b>    73.68</b></font> |<font color="#C01C28"><b>       47</b></font> |<font color="#C01C28"><b>    46.77</b></font> |<font color="#A2734C"><b>    75.66</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>AAVE3PoolMock.sol               </b></font> |<font color="#26A269"><b>    85.29</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#C01C28"><b>       25</b></font> |<font color="#A2734C"><b>    72.73</b></font> |<font color="#C01C28"><b>... 221,225,227</b></font> |
  <font color="#26A269"><b>BalancerVaultMock.sol           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       60</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#A2734C"><b>BorrowerAttacker.sol            </b></font> |<font color="#A2734C"><b>    71.43</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>       75</b></font> |<font color="#A2734C"><b>    71.43</b></font> |<font color="#C01C28"><b>          27,49</b></font> |
  <font color="#26A269"><b>ERC20Mock.sol                   </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ERC3156FlashBorrowerMock.sol    </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>ERC3156FlashLender.sol          </b></font> |<font color="#26A269"><b>    81.82</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#A2734C"><b>    66.67</b></font> |<font color="#26A269"><b>    84.62</b></font> |<font color="#C01C28"><b>          22,30</b></font> |
  <font color="#A2734C"><b>OracleMock.sol                  </b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>       80</b></font> |<font color="#26A269"><b>    88.89</b></font> |<font color="#C01C28"><b>             18</b></font> |
  <font color="#C01C28"><b>PythMock.sol                    </b></font> |<font color="#C01C28"><b>    40.74</b></font> |<font color="#C01C28"><b>       15</b></font> |<font color="#C01C28"><b>    35.71</b></font> |<font color="#A2734C"><b>    64.44</b></font> |<font color="#C01C28"><b>... 104,117,126</b></font> |
  <font color="#A2734C"><b>QuoterV2Mock.sol                </b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>       20</b></font> |<font color="#C01C28"><b>       40</b></font> |<font color="#C01C28"><b>       13,41,42</b></font> |
  <font color="#26A269"><b>SettingsV2.sol                  </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>StrategyLeverageSettingsMock.sol</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#A2734C"><b>StrategyMock.sol                </b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    71.43</b></font> |<font color="#A2734C"><b>    61.54</b></font> |<font color="#C01C28"><b> 24,25,26,27,41</b></font> |
  <font color="#26A269"><b>UniV3RouterMock.sol             </b></font> |<font color="#26A269"><b>    92.31</b></font> |<font color="#A2734C"><b>    56.25</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>       90</b></font> |<font color="#C01C28"><b>          60,82</b></font> |
  <font color="#26A269"><b>WETH.sol                        </b></font> |<font color="#26A269"><b>    92.31</b></font> |<font color="#A2734C"><b>     62.5</b></font> |<font color="#26A269"><b>    83.33</b></font> |<font color="#26A269"><b>       90</b></font> |<font color="#C01C28"><b>          18,34</b></font> |
  <font color="#A2734C"><b>WstETH.sol                      </b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#C01C28"><b>       25</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#A2734C"><b>    56.25</b></font> |<font color="#C01C28"><b>... 37,38,42,50</b></font> |
 <font color="#C01C28"><b>oracles/                         </b></font> |<font color="#C01C28"><b>    31.25</b></font> |<font color="#C01C28"><b>     11.9</b></font> |<font color="#C01C28"><b>    22.73</b></font> |<font color="#C01C28"><b>    28.57</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#C01C28"><b>EthOracle.sol                   </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 35,36,40,41</b></font> |
  <font color="#26A269"><b>PythOracle.sol                  </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>     62.5</b></font> |<font color="#26A269"><b>    83.33</b></font> |<font color="#26A269"><b>    94.12</b></font> |<font color="#C01C28"><b>             82</b></font> |
  <font color="#C01C28"><b>WstETHToETHOracle.sol           </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 36,37,42,43</b></font> |
  <font color="#C01C28"><b>WstETHToETHOracleETH.sol        </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 38,39,43,44</b></font> |
  <font color="#C01C28"><b>cbETHToETHOracle.sol            </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 36,37,41,42</b></font> |
 <font color="#26A269"><b>proxy/                           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>BakerFiProxy.sol                </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#26A269"><b>BakerFiProxyAdmin.sol           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#A2734C"><b>       50</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
 <font color="#C01C28"><b>tests/                           </b></font> |<font color="#C01C28"><b>    15.38</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>       25</b></font> |<font color="#C01C28"><b>    14.29</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#C01C28"><b>BoringRebaseTest.sol            </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>           9,17</b></font> |
  <font color="#26A269"><b>RebaseLibraryTest.sol           </b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#26A269"><b>      100</b></font> |<font color="#C01C28"><b>               </b></font> |
  <font color="#C01C28"><b>VaultFuzzing.sol                </b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>        0</b></font> |<font color="#C01C28"><b>... 26,30,35,39</b></font> |
-----------------------------------|----------|----------|----------|----------|----------------|
<font color="#26A269"><b>All files                         </b></font> |<font color="#26A269"><b>    80.46</b></font> |<font color="#A2734C"><b>    57.89</b></font> |<font color="#A2734C"><b>    60.47</b></font> |<font color="#A2734C"><b>    78.85</b></font> |<font color="#C01C28"><b>               </b></font> |
-----------------------------------|----------|----------|----------|----------|----------------|
</pre>

## Miscellaneous
Employees of BakerFi and employees' family members are ineligible to participate in this audit.
