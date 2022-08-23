// contracts/BankTransaction.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//  Calculates division limited to the 1 decimal place
//  placing of decimal point is left to the developer
contract SimpleDivision {
    uint256 res;

    function divide(uint256 a, uint256 b) public {
        for (uint256 i = 0; i < 3; i++) {
            if (a % b != 0) {
                a *= 10;
            } else {
                break;
            }
        }

        res = a / b;
    }

    function getResult() public view returns (uint256) {
        return res;
    }
}
