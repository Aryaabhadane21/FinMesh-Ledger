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

export const exchangeRates = {
    USD: 1, EUR: 1.09, GBP: 1.27, INR: 0.0119, JPY: 0.0067, CHF: 1.12, AUD: 0.66, CAD: 0.74,
};

export const currencyGraph = {
    USD: [
        { to: "EUR", rate: 0.92, fee: 2.50 },
        { to: "GBP", rate: 0.79, fee: 1.80 },
        { to: "INR", rate: 83.50, fee: 5.00 },
        { to: "JPY", rate: 149.50, fee: 3.00 },
        { to: "CHF", rate: 0.89, fee: 2.00 },
        { to: "CAD", rate: 1.36, fee: 1.50 },
        { to: "AUD", rate: 1.53, fee: 2.20 },
    ],
    EUR: [
        { to: "USD", rate: 1.09, fee: 2.50 },
        { to: "GBP", rate: 0.86, fee: 0.80 },
        { to: "CHF", rate: 0.97, fee: 0.60 },
        { to: "INR", rate: 91.00, fee: 4.50 },
        { to: "JPY", rate: 163.00, fee: 2.80 },
    ],
    GBP: [
        { to: "USD", rate: 1.27, fee: 1.80 },
        { to: "EUR", rate: 1.16, fee: 0.80 },
        { to: "CHF", rate: 1.13, fee: 0.70 },
        { to: "JPY", rate: 189.50, fee: 2.50 },
        { to: "INR", rate: 106.00, fee: 4.00 },
    ],
    INR: [
        { to: "USD", rate: 0.0120, fee: 15.00 },
        { to: "EUR", rate: 0.011, fee: 18.00 },
        { to: "GBP", rate: 0.0094, fee: 20.00 },
        { to: "JPY", rate: 1.79, fee: 8.00 },
    ],
    JPY: [
        { to: "USD", rate: 0.0067, fee: 100.00 },
        { to: "EUR", rate: 0.0061, fee: 120.00 },
        { to: "GBP", rate: 0.0053, fee: 130.00 },
        { to: "INR", rate: 0.56, fee: 50.00 },
    ],
    CHF: [
        { to: "USD", rate: 1.12, fee: 2.00 },
        { to: "EUR", rate: 1.03, fee: 0.60 },
        { to: "GBP", rate: 0.89, fee: 0.70 },
    ],
    CAD: [
        { to: "USD", rate: 0.74, fee: 1.50 },
        { to: "EUR", rate: 0.68, fee: 2.00 },
        { to: "GBP", rate: 0.58, fee: 2.20 },
    ],
    AUD: [
        { to: "USD", rate: 0.66, fee: 2.20 },
        { to: "EUR", rate: 0.60, fee: 2.50 },
        { to: "GBP", rate: 0.52, fee: 2.80 },
    ],
};

export const bankRoutes = [
    {
        id: "route_1",
        label: "India → France (INR to EUR)",
        from: "101", to: "102",
        hops: [
            { bank: "HDFC Bank", location: "Mumbai", type: "origin" },
            { bank: "RBI Clearing", location: "India", type: "intermediary", latency: "120ms", fee: 15 },
            { bank: "SWIFT Network", location: "Global", type: "intermediary", latency: "340ms", fee: 25 },
            { bank: "BNP Paribas", location: "Paris", type: "destination", latency: "90ms", fee: 10 },
        ],
    },
    {
        id: "route_2",
        label: "US → India (USD to INR)",
        from: "108", to: "101",
        hops: [
            { bank: "Chase Bank", location: "New York", type: "origin" },
            { bank: "Federal Reserve", location: "US", type: "intermediary", latency: "60ms", fee: 10 },
            { bank: "SWIFT Network", location: "Global", type: "intermediary", latency: "340ms", fee: 25 },
            { bank: "RBI Clearing", location: "India", type: "intermediary", latency: "120ms", fee: 15 },
            { bank: "HDFC Bank", location: "Mumbai", type: "destination", latency: "80ms", fee: 5 },
        ],
    },
    {
        id: "route_3",
        label: "France → Dubai (EUR to USD)",
        from: "102", to: "103",
        hops: [
            { bank: "BNP Paribas", location: "Paris", type: "origin" },
            { bank: "ECB Clearing", location: "Frankfurt", type: "intermediary", latency: "45ms", fee: 8 },
            { bank: "Emirates NBD", location: "Dubai", type: "destination", latency: "200ms", fee: 12 },
        ],
    },
    {
        id: "route_4",
        label: "India → India (INR Domestic)",
        from: "104", to: "107",
        hops: [
            { bank: "ICICI Bank", location: "Thane", type: "origin" },
            { bank: "NEFT/RTGS", location: "India", type: "intermediary", latency: "30ms", fee: 2 },
            { bank: "SBI", location: "Delhi", type: "destination", latency: "25ms", fee: 1 },
        ],
    },
];

export const tradeLimits = {
    standard: { label: "Standard", limit: 25000 },
    premium: { label: "Premium", limit: 75000 },
    institutional: { label: "Institutional", limit: 250000 },
    vip: { label: "VIP", limit: 500000 },
};
