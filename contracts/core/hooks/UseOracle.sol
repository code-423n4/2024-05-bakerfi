// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.24;
pragma experimental ABIEncoderV2;

import {ServiceRegistry} from "../ServiceRegistry.sol";
import {IOracle} from "../../interfaces/core/IOracle.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

abstract contract UseOracle is Initializable {
    IOracle private _oracle;

    error InvalidOracleContract();

    function _initUseOracle(
        ServiceRegistry registry,
        bytes32 oracleName
    ) internal onlyInitializing {
        _oracle = IOracle(registry.getServiceFromHash(oracleName));
        if (address(_oracle) == address(0)) revert InvalidOracleContract();
    }

    function oracle() public view returns (IOracle) {
        return _oracle;
    }

    function getLastPrice() public view returns (IOracle.Price memory) {
        return _oracle.getLatestPrice();
    }
}
