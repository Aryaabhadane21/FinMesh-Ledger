export const initialAccounts = [
    { id: "101", name: "Rahul (Mumbai)", currency: "INR", balance: 125000, assets: "Gold, Bonds", status: "Verified" },
    { id: "102", name: "Sarah (Paris)", currency: "EUR", balance: 1540, assets: "Stocks", status: "Verified" },
    { id: "103", name: "Amit (Dubai)", currency: "USD", balance: 5200, assets: "Real Estate", status: "Pending" },
    { id: "104", name: "Priya (Thane)", currency: "INR", balance: 89000, assets: "Cash", status: "Verified" },
    { id: "105", name: "Sneha Patil", currency: "USD", balance: 1200, assets: "None", status: "Rejected" },
    { id: "106", name: "Michael Chen", currency: "EUR", balance: 3200, assets: "Bonds", status: "Verified" },
    { id: "107", name: "Vikram Singh", currency: "INR", balance: 45000, assets: "Gold", status: "Verified" },
    { id: "108", name: "Anita Rao", currency: "USD", balance: 9800, assets: "Stocks", status: "Verified" },
];

export const initialTransactions = [
    { id: 901, from: "101", to: "102", amount: 500, currency: "USD", date: "2026-06-12 10:30", status: "Failed" },
    { id: 902, from: "104", to: "103", amount: 1200, currency: "INR", date: "2026-06-12 11:15", status: "Completed" },
    { id: 903, from: "103", to: "106", amount: 300, currency: "EUR", date: "2026-06-12 14:20", status: "Failed" },
    { id: 904, from: "107", to: "105", amount: 100, currency: "USD", date: "2026-06-13 09:00", status: "Completed" },
];

export const initialQueue = [
    { id: 1, from: "101", to: "102", amount: 200, currency: "USD", status: "In Queue" },
    { id: 2, from: "103", to: "106", amount: 450, currency: "EUR", status: "In Queue" },
    { id: 3, from: "104", to: "108", amount: 1000, currency: "INR", status: "In Queue" },
];
