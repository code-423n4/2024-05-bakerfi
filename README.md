# ✨ So you want to run an audit

This `README.md` contains a set of checklists for our audit collaboration.

Your audit will use two repos: 
- **an _audit_ repo** (this one), which is used for scoping your audit and for providing information to wardens
- **a _findings_ repo**, where issues are submitted (shared with you after the audit) 

Ultimately, when we launch the audit, this repo will be made public and will contain the smart contracts to be reviewed and all the information needed for audit participants. The findings repo will be made public after the audit report is published and your team has mitigated the identified issues.

Some of the checklists in this doc are for **C4 (🐺)** and some of them are for **you as the audit sponsor (⭐️)**.

---

# Audit setup

## 🐺 C4: Set up repos
- [ ] Create a new private repo named `YYYY-MM-sponsorname` using this repo as a template.
- [ ] Rename this repo to reflect audit date (if applicable)
- [ ] Rename audit H1 below
- [ ] Update pot sizes
  - [ ] Remove the "Bot race findings opt out" section if there's no bot race.
- [ ] Fill in start and end times in audit bullets below
- [ ] Add link to submission form in audit details below
- [ ] Add the information from the scoping form to the "Scoping Details" section at the bottom of this readme.
- [ ] Add matching info to the Code4rena site
- [ ] Add sponsor to this private repo with 'maintain' level access.
- [ ] Send the sponsor contact the url for this repo to follow the instructions below and add contracts here. 
- [ ] Delete this checklist.

# Repo setup

## ⭐️ Sponsor: Add code to this repo

- [ ] Create a PR to this repo with the below changes:
- [ ] Confirm that this repo is a self-contained repository with working commands that will build (at least) all in-scope contracts, and commands that will run tests producing gas reports for the relevant contracts.
- [ ] Please have final versions of contracts and documentation added/updated in this repo **no less than 48 business hours prior to audit start time.**
- [ ] Be prepared for a 🚨code freeze🚨 for the duration of the audit — important because it establishes a level playing field. We want to ensure everyone's looking at the same code, no matter when they look during the audit. (Note: this includes your own repo, since a PR can leak alpha to our wardens!)

## ⭐️ Sponsor: Repo checklist

- [ ] Modify the [Overview](#overview) section of this `README.md` file. Describe how your code is supposed to work with links to any relevent documentation and any other criteria/details that the auditors should keep in mind when reviewing. (Here are two well-constructed examples: [Ajna Protocol](https://github.com/code-423n4/2023-05-ajna) and [Maia DAO Ecosystem](https://github.com/code-423n4/2023-05-maia))
- [ ] Review the Gas award pool amount, if applicable. This can be adjusted up or down, based on your preference - just flag it for Code4rena staff so we can update the pool totals across all comms channels.
- [ ] Optional: pre-record a high-level overview of your protocol (not just specific smart contract functions). This saves wardens a lot of time wading through documentation.
- [ ] [This checklist in Notion](https://code4rena.notion.site/Key-info-for-Code4rena-sponsors-f60764c4c4574bbf8e7a6dbd72cc49b4#0cafa01e6201462e9f78677a39e09746) provides some best practices for Code4rena audit repos.

## ⭐️ Sponsor: Final touches
- [ ] Review and confirm the pull request created by the Scout (technical reviewer) who was assigned to your contest. *Note: any files not listed as "in scope" will be considered out of scope for the purposes of judging, even if the file will be part of the deployed contracts.*
- [ ] Check that images and other files used in this README have been uploaded to the repo as a file and then linked in the README using absolute path (e.g. `https://github.com/code-423n4/yourrepo-url/filepath.png`)
- [ ] Ensure that *all* links and image/file paths in this README use absolute paths, not relative paths
- [ ] Check that all README information is in markdown format (HTML does not render on Code4rena.com)
- [ ] Delete this checklist and all text above the line below when you're ready.

---

# BakerFi audit details
- Total Prize Pool: $28500 in USDC
  - HM awards: $23040 in USDC
  - (remove this line if there is no Analysis pool) Analysis awards: XXX XXX USDC (Notion: Analysis pool)
  - QA awards: $960 in USDC
  - (remove this line if there is no Bot race) Bot Race awards: XXX XXX USDC (Notion: Bot Race pool)
 
  - Judge awards: $4000 in USDC
  - Lookout awards: XXX XXX USDC (Notion: Sum of Pre-sort fee + Pre-sort early bonus)
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

Please review the following confidentiality requirements carefully, and if anything is unclear, ask questions in the private audit channel in the C4 Discord.

>>DRAG IN CLASSIFIED IMAGE HERE

## Automated Findings / Publicly Known Issues

The 4naly3er report can be found [here](https://github.com/code-423n4/2024-05-bakerfi/blob/main/4naly3er-report.md).



_Note for C4 wardens: Anything included in this `Automated Findings / Publicly Known Issues` section is considered a publicly known issue and is ineligible for awards._
## 🐺 C4: Begin Gist paste here (and delete this line)





# Scope

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

