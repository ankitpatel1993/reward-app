const fetch = function() {
    // Simulate API call
    return Promise.resolve(
        [
            { customerId: 1, name: "Customer 1", amount: 10, transactionDate: "2022-01-04T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 120, transactionDate: "2022-01-04T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 170, transactionDate: "2022-01-04T10:20:30Z" },
            { customerId: 4, name: "Customer 4", amount: 150, transactionDate: "2022-01-04T10:20:30Z" },
            { customerId: 1, name: "Customer 1", amount: 130, transactionDate: "2022-01-11T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 90, transactionDate: "2022-01-11T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 120, transactionDate: "2022-01-11T10:20:30Z" },
            { customerId: 4, name: "Customer 4", amount: 170, transactionDate: "2022-01-11T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 180, transactionDate: "2022-02-10T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 70, transactionDate: "2022-02-10T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 110, transactionDate: "2022-02-10T10:20:30Z" },
            { customerId: 4, name: "Customer 4", amount: 90, transactionDate: "2022-02-10T10:20:30Z" },
            { customerId: 1, name: "Customer 1", amount: 75, transactionDate: "2022-02-15T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 90, transactionDate: "2022-02-15T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 160, transactionDate: "2022-02-15T10:20:30Z" },
            { customerId: 4, name: "Customer 4", amount: 110, transactionDate: "2022-02-15T10:20:30Z" },
            { customerId: 1, name: "Customer 1", amount: 120, transactionDate: "2022-03-10T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 170, transactionDate: "2022-03-10T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 40, transactionDate: "2022-03-10T10:20:30Z" },
            { customerId: 4, name: "Customer 4", amount: 30, transactionDate: "2022-03-10T10:20:30Z" },
            { customerId: 1, name: "Customer 1", amount: 175, transactionDate: "2022-03-15T10:20:30Z" },
            { customerId: 2, name: "Customer 2", amount: 190, transactionDate: "2022-03-15T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 60, transactionDate: "2022-03-15T10:20:30Z" },
            { customerId: 3, name: "Customer 3", amount: 10, transactionDate: "2022-03-15T10:20:30Z" }
        ]
    );
};

export default fetch;