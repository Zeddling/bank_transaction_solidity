// contracts/BankTransaction.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BankTransaction {
    struct Transaction {
        bytes32 payment_id;
        address client_id;
        address recipient_id;
        uint8 amount;
        uint256 created_at;
        string note;
        bytes32 hash;
    }

    //  map address to pid array
    mapping(address => bytes32[]) addressPayments;

    mapping(bytes32 => Transaction) transactions;

    event TransactionCreated(Transaction t);

    function create_payment(
        address cid,
        address rid,
        uint8 amount,
        string calldata note
    ) public returns (Transaction memory t) {
        uint256 time = block.timestamp;

        bytes32 pid = sha256(abi.encodePacked(cid, rid, amount, time));

        bytes32 signature = sha256(
            abi.encodePacked(pid, cid, rid, amount, time)
        );

        t = Transaction(pid, cid, rid, amount, time, note, signature);

        addressPayments[cid].push(pid);
        addressPayments[rid].push(pid);
        transactions[pid] = t;
    }

    function findByPID(bytes32 pid) public view returns (Transaction memory t) {
        t = transactions[pid];
    }

    function findByAccount(address account)
        public
        view
        returns (Transaction[] memory)
    {
        //  get array of pids
        bytes32[] memory pids = addressPayments[account];
        Transaction[] memory ts = new Transaction[](pids.length);

        for (uint256 i = 0; i < pids.length; i++) {
            ts[i] = transactions[pids[i]];
        }

        return ts;
    }
}
