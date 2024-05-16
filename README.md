
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





# Scope

- ✅ This should be completed using the `metrics.md` file
- ✅ Last row of the table should be Total: SLOC
- ✅ SCOUTS: Have the sponsor review and and confirm in text the details in the section titled "Scoping Q amp; A"

*See [scope.txt](https://github.com/code-423n4/2024-05-bakerfi/blob/main/scope.txt)*

### Files in scope


| File   | Logic Contracts | Interfaces | SLOC  | Purpose | Libraries used |
| ------ | --------------- | ---------- | ----- | -----   | ------------ |
| /contracts/core/Constants.sol | ****| **** | 6 | ||
| /contracts/core/GovernableOwnable.sol | 1| **** | 27 | |@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol|
| /contracts/core/ServiceRegistry.sol | 1| **** | 49 | |@openzeppelin/contracts/access/Ownable.sol|
| /contracts/core/Settings.sol | 1| **** | 97 | |@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol<br>@openzeppelin/contracts/utils/structs/EnumerableSet.sol|
| /contracts/core/Vault.sol | 1| **** | 172 | |@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| /contracts/core/flashloan/BalancerFlashLender.sol | 1| **** | 83 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashLenderUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashBorrowerUpgradeable.sol|
| /contracts/core/governance/BKR.sol | 1| **** | 29 | |@openzeppelin/contracts/token/ERC20/ERC20.sol<br>@openzeppelin/contracts/access/Ownable.sol<br>@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol<br>@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol|
| /contracts/core/governance/BakerFiGovernor.sol | 1| **** | 86 | |@openzeppelin/contracts/governance/Governor.sol<br>@openzeppelin/contracts/governance/compatibility/GovernorCompatibilityBravo.sol<br>@openzeppelin/contracts/governance/extensions/GovernorVotes.sol<br>@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol<br>@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol|
| /contracts/core/governance/Timelock.sol | 1| **** | 9 | |@openzeppelin/contracts/governance/TimelockController.sol|
| /contracts/core/hooks/UseAAVEv3.sol | 1| **** | 22 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseFlashLender.sol | 1| **** | 21 | |@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashLenderUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseIERC20.sol | 1| **** | 19 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseLeverage.sol | 1| **** | 51 | ||
| /contracts/core/hooks/UseOracle.sol | 1| **** | 22 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseSettings.sol | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseStETH.sol | 1| **** | 19 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseStrategy.sol | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseSwapper.sol | 1| **** | 75 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseUniQuoter.sol | 1| **** | 19 | |@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseWETH.sol | 1| **** | 27 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/hooks/UseWstETH.sol | 1| **** | 36 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/strategies/StrategyAAVEv3.sol | 1| **** | 73 | |@openzeppelin/contracts/token/ERC20/IERC20.sol<br>@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| /contracts/core/strategies/StrategyAAVEv3WSTETH.sol | 1| **** | 59 | |@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol|
| /contracts/core/strategies/StrategyLeverage.sol | 1| **** | 378 | |@openzeppelin/contracts-upgradeable/interfaces/IERC3156FlashBorrowerUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol<br>@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol<br>@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol|
| /contracts/core/strategies/StrategyLeverageSettings.sol | 1| **** | 52 | ||
| /contracts/libraries/RebaseLibrary.sol | 1| **** | 35 | ||
| /contracts/oracles/EthOracle.sol | 1| **** | 26 | ||
| /contracts/oracles/PythOracle.sol | 1| **** | 50 | ||
| /contracts/oracles/WstETHToETHOracle.sol | 1| **** | 26 | ||
| /contracts/oracles/WstETHToETHOracleETH.sol | 1| **** | 32 | ||
| /contracts/oracles/cbETHToETHOracle.sol | 1| **** | 27 | ||
| /contracts/proxy/BakerFiProxy.sol | 1| **** | 9 | |@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol|
| /contracts/proxy/BakerFiProxyAdmin.sol | 1| **** | 9 | |@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol|
| **Totals** | **32** | **** | **1683** | | |

### Files out of scope

✅ SCOUTS: List files/directories out of scope

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
### Are there any ERC20's in scope?: Yes

✅ SCOUTS: If the answer above 👆 is "Yes", please add the tokens below 👇 to the table. Otherwise, update the column with "None".

Any (all possible ERC20s)
WETH, USDC, USDT, RETH, STETH, WSETH, 

### Are there any ERC777's in scope?: No

✅ SCOUTS: If the answer above 👆 is "Yes", please add the tokens below 👇 to the table. Otherwise, update the column with "None".



### Are there any ERC721's in scope?: No

✅ SCOUTS: If the answer above 👆 is "Yes", please add the tokens below 👇 to the table. Otherwise, update the column with "None".



### Are there any ERC1155's in scope?: No

✅ SCOUTS: If the answer above 👆 is "Yes", please add the tokens below 👇 to the table. Otherwise, update the column with "None".



✅ SCOUTS: Once done populating the table below, please remove all the Q/A data above.

| Question                                | Answer                       |
| --------------------------------------- | ---------------------------- |
| ERC20 used by the protocol              |       🖊️             |
| Test coverage                           | ✅ SCOUTS: Please populate this after running the test coverage command                          |
| ERC721 used  by the protocol            |            🖊️              |
| ERC777 used by the protocol             |           🖊️                |
| ERC1155 used by the protocol            |              🖊️            |
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
N/A

✅ SCOUTS: Please format the response above 👆 using the template below👇

| Question                                | Answer                       |
| --------------------------------------- | ---------------------------- |
| src/Token.sol                           | ERC20, ERC721                |
| src/NFT.sol                             | ERC721                       |


# Additional context

## Main invariants

Only the Governor should be able to update Global Settings
Only the Governorwer should be able to update the Strategy Settings
Only the Vault should be able to call Strategy's deploy, undeploy and harvest  functions
No external user should access have control of the strategy funds.
Only the owner of Vault shares can burn its shares to withdraw funds from the strategy.
It is not possible to mint new shares without depositing ETH on the vault

✅ SCOUTS: Please format the response above 👆 so its not a wall of text and its readable.

## Attack ideas (where to focus for bugs)
Vault Share Inflation and Deflation attacks.
Manipulated Withdraws.

✅ SCOUTS: Please format the response above 👆 so its not a wall of text and its readable.

## All trusted roles in the protocol

Governor 
User

✅ SCOUTS: Please format the response above 👆 using the template below👇

| Role                                | Description                       |
| --------------------------------------- | ---------------------------- |
| Owner                          | Has superpowers                |
| Administrator                             | Can change fees                       |

## Describe any novel or unique curve logic or mathematical models implemented in the contracts:

N/A

✅ SCOUTS: Please format the response above 👆 so its not a wall of text and its readable.

## Running tests

npm install 
npm run test:gas


✅ SCOUTS: Please format the response above 👆 using the template below👇

```bash
git clone https://github.com/code-423n4/2023-08-arbitrum
git submodule update --init --recursive
cd governance
foundryup
make install
make build
make sc-election-test
```
To run code coverage
```bash
make coverage
```
To run gas benchmarks
```bash
make gas
```

✅ SCOUTS: Add a screenshot of your terminal showing the gas report
✅ SCOUTS: Add a screenshot of your terminal showing the test coverage

## Miscellaneous
Employees of BakerFi and employees' family members are ineligible to participate in this audit.
