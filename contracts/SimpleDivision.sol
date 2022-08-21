// contracts/BankTransaction.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//  Calculates division limited to the 4th decimal place
//  placing of decimal point is left to the developer
contract SimpleDivision {
    uint256 result;

    function divide(uint256 a, uint256 b) public {
        for (uint256 i = 0; i < 4; i++) {
            if (a % b != 0) {
                a *= 10;
            } else {
                break;
            }
        }

        result = a / b;
    }

    function getResult() public view returns (uint256) {
        return result;
    }
}
