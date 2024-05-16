# Solidity API

## BakerFiGovernor

### constructor

```solidity
constructor(contract IVotes _token, contract TimelockController _timelock) public
```

### votingDelay

```solidity
function votingDelay() public pure returns (uint256)
```

module:user-config

_Delay, between the proposal is created and the vote starts. The unit this duration is expressed in depends
on the clock (see EIP-6372) this contract uses.

This can be increased to leave time for users to buy voting power, or delegate it, before the voting of a
proposal starts._

### votingPeriod

```solidity
function votingPeriod() public pure returns (uint256)
```

module:user-config

_Delay between the vote start and vote end. The unit this duration is expressed in depends on the clock
(see EIP-6372) this contract uses.

NOTE: The {votingDelay} can delay the start of the vote. This must be considered when setting the voting
duration compared to the voting delay._

### proposalThreshold

```solidity
function proposalThreshold() public pure returns (uint256)
```

_Part of the Governor Bravo's interface: _"The number of votes required in order for a voter to become a proposer"_._

### state

```solidity
function state(uint256 proposalId) public view returns (enum IGovernor.ProposalState)
```

### propose

```solidity
function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) public returns (uint256)
```

### cancel

```solidity
function cancel(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) public returns (uint256)
```

### _execute

```solidity
function _execute(uint256 proposalId, address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) internal
```

### _cancel

```solidity
function _cancel(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) internal returns (uint256)
```

### _executor

```solidity
function _executor() internal view returns (address)
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

