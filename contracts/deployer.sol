// spdx-license-identifier: mit

pragma solidity ^0.8.0;

contract Deployer {
    event ContractDeployed(address);

    function deploy(bytes32 salt, bytes memory bytecode) public {
        //bytes memory bytecode = contractBytecode;
        address addr;
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        emit ContractDeployed(addr);
    }
}
