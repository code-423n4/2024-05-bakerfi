// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IServiceRegistry} from "../interfaces/core/IServiceRegistry.sol";

/**
 * @dev The Constants used for servive names
 * Attention: These are the constants that should be used to resolve the deployment contract addresses !!
 */
bytes32 constant FLASH_LENDER_CONTRACT = keccak256(bytes("FlashLender"));
bytes32 constant WETH_CONTRACT = keccak256(bytes("WETH"));
bytes32 constant ST_ETH_CONTRACT = keccak256(bytes("stETH"));
bytes32 constant WST_ETH_CONTRACT = keccak256(bytes("wstETH"));
bytes32 constant BKR_CONTRACT = keccak256(bytes("BKR"));
bytes32 constant AAVE_V3_CONTRACT = keccak256(bytes("AAVE_V3"));
bytes32 constant WSTETH_USD_ORACLE_CONTRACT = keccak256(bytes("wstETH/USD Oracle"));
bytes32 constant CBETH_USD_ORACLE_CONTRACT = keccak256(bytes("cbETH/USD Oracle"));
bytes32 constant ETH_USD_ORACLE_CONTRACT = keccak256(bytes("ETH/USD Oracle"));
bytes32 constant CBETH_ERC20_CONTRACT = keccak256(bytes("cbETH"));
bytes32 constant UNISWAP_ROUTER_CONTRACT = keccak256(bytes("Uniswap Router"));
bytes32 constant SWAPPER_HANDLER_CONTRACT = keccak256(bytes("Swapper Handler"));
bytes32 constant BALANCER_VAULT_CONTRACT = keccak256(bytes("Balancer Vault"));
bytes32 constant SETTINGS_CONTRACT = keccak256(bytes("Settings"));
bytes32 constant UNISWAP_QUOTER_CONTRACT = keccak256(bytes("Uniswap Quoter"));
bytes32 constant STRATEGY_CONTRACT = keccak256(bytes("Strategy"));
bytes32 constant PYTH_CONTRACT = keccak256(bytes("Pyth"));

/**
 * @title BakerFi Service Registy
 *
 * @author Chef Kenji <chef.kenji@bakerfi.xyz>
 * @author Chef Kal-EL <chef.kal-el@bakerfi.xyz>
 *
 * @notice Service registry that could be used resolve a service address with the
 * name of the service.
 *
 * This contract inherits from the `Ownable` contract and implements the `IServiceRegistry` interface.
 * It serves as a registry for managing various services and dependencies within BakerFI System.
 */
contract ServiceRegistry is Ownable, IServiceRegistry {
    error InvalidOwner();
    error ServiceAlreadySet();
    error ServiceUnknown();

    /**
     * @dev A mapping of name hashes to service addresses.
     *
     * This private mapping stores the relationship between name hashes and the corresponding service addresses.
     */
    mapping(bytes32 => address) private _services;

    /**
     * @dev Constructor for the ServiceRegistry contract.
     *
     * It sets the initial owner of the contract and emits an {OwnershipTransferred} event.
     *
     * @param ownerToSet The address to be set as the initial owner of the contract.
     */
    constructor(address ownerToSet) {
        if (ownerToSet == address(0)) revert InvalidOwner();
        _transferOwnership(ownerToSet);
    }
    /**
     * @dev Registers a new service in the ServiceRegistry.
     *
     * This function can only be called by the owner of the contract.
     * It associates the specified service name hash with its corresponding address in the _services mapping.
     * Emits a {ServiceRegistered} event upon successful registration.
     *
     * @param serviceNameHash The hash of the name of the service to be registered.
     * @param serviceAddress The address of the service to be registered.
     *
     * Requirements:
     * - The service with the specified name hash must not be already registered.
     */
    function registerService(bytes32 serviceNameHash, address serviceAddress) external onlyOwner {
        if (_services[serviceNameHash] != address(0)) revert ServiceAlreadySet();
        _services[serviceNameHash] = serviceAddress;
        emit ServiceRegistered(serviceNameHash, serviceAddress);
    }

    /**
     * @dev Unregisters an existing service from the ServiceRegistry.
     *
     * This function can only be called by the owner of the contract.
     * It disassociates the specified service name hash from its corresponding address in the _services mapping.
     * Emits a {ServiceUnregistered} event upon successful unregistration.
     *
     * @param serviceNameHash The hash of the name of the service to be unregistered.
     *
     * Requirements:
     * - The service with the specified name hash must exist.
     */
    function unregisterService(bytes32 serviceNameHash) external onlyOwner {
        if (_services[serviceNameHash] == address(0)) revert ServiceUnknown();
        _services[serviceNameHash] = address(0);
        emit ServiceUnregistered(serviceNameHash);
    }
    /**
     * @dev Computes the name hash for a given service name.
     *
     * This function is externally callable and returns the keccak256 hash of the provided service name.
     *
     * @param name The name of the service for which the name hash is to be computed.
     * @return serviceNameHash The keccak256 hash of the provided service name.
     */
    function getServiceNameHash(string memory name) external pure returns (bytes32) {
        return keccak256(abi.encodePacked(name));
    }

    /**
     * @dev Retrieves the address of a registered service by its name.
     *
     * This function is externally callable and returns the address associated with the specified service name.
     *
     * @param serviceName The name of the service for which the address is to be retrieved.
     * @return serviceAddress The address of the registered service.
     */
    function getService(string memory serviceName) external view returns (address) {
        return _services[keccak256(abi.encodePacked(serviceName))];
    }

    /**
     * @dev Retrieves the address of a registered service by its name hash.
     *
     * This function is externally callable and returns the address associated with the specified service name hash.
     *
     * @param serviceHash The keccak256 hash of the service name for which the address is to be retrieved.
     * @return serviceAddress The address of the registered service.
     */
    function getServiceFromHash(bytes32 serviceHash) external view returns (address) {
        return _services[serviceHash];
    }
}
