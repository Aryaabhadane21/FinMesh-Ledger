export const initialAccounts = [
    { id: "ACC-101", name: "Rahul (Mumbai)", currency: "INR", balance: 125000, assets: "Gold, Bonds", status: "Verified" },
    { id: "ACC-102", name: "Sarah (Paris)", currency: "EUR", balance: 1540, assets: "Stocks", status: "Verified" },
    { id: "ACC-103", name: "Amit (Dubai)", currency: "USD", balance: 5200, assets: "Real Estate", status: "Pending" },
    { id: "ACC-104", name: "Priya (Thane)", currency: "INR", balance: 89000, assets: "Cash", status: "Verified" },
    { id: "ACC-105", name: "Sneha Patil", currency: "USD", balance: 1200, assets: "None", status: "Rejected" },
    { id: "ACC-106", name: "Michael Chen", currency: "EUR", balance: 3200, assets: "Bonds", status: "Verified" },
    { id: "ACC-107", name: "Vikram Singh", currency: "INR", balance: 45000, assets: "Gold", status: "Verified" },
    { id: "ACC-108", name: "Anita Rao", currency: "USD", balance: 9800, assets: "Stocks", status: "Verified" },
];

export const initialTransactions = [
    { id: "TXN-901", from: "ACC-101", to: "ACC-102", amount: 500, currency: "USD", timestamp: "2026-06-12 10:30", status: "Failed" },
    { id: "TXN-902", from: "ACC-104", to: "ACC-103", amount: 1200, currency: "INR", timestamp: "2026-06-12 11:15", status: "Completed" },
    { id: "TXN-903", from: "ACC-103", to: "ACC-106", amount: 300, currency: "EUR", timestamp: "2026-06-12 14:20", status: "Failed" },
    { id: "TXN-904", from: "ACC-107", to: "ACC-105", amount: 100, currency: "USD", timestamp: "2026-06-13 09:00", status: "Completed" },
];

export const initialQueue = [
    { id: 1, from: "Rahul", to: "Sarah", amount: 200, currency: "USD", status: "In Queue" },
    { id: 2, from: "Amit", to: "Michael", amount: 450, currency: "EUR", status: "In Queue" },
    { id: 3, from: "Priya", to: "Anita", amount: 1000, currency: "INR", status: "In Queue" },
];
