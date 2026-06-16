# FinMesh Ledger: Project Documentation 📄

---

## 1. Cover Page
**Project Name:** FinMesh Ledger  
**Institution:** ITM Skills University  
**Project Type:** Financial Management System (React Application)  
**Date:** June 16, 2026  

---

## 2. Student Details
- **Name:** [Your Full Name Here]  
- **Batch:** [Your Batch/Division]  
- **Student ID:** [Your Student ID]  
- **Email:** [Your Email Address]  

---

## 3. Problem Statement
The objective is to build a robust system for trading money between people or accounts, ensuring every transaction is meticulously tracked. The system must handle currency conversions (e.g., USD to EUR) correctly and provide tools for safety, optimization, and transparency in financial movements. 

Key challenges addressed:
- Preventing loss of funds through transaction reversals.
- Optimizing conversion costs.
- Managing high-volume settlements in order.
- High-level oversight for account management.

---

## 4. Tech Stack
The application is built using modern web technologies to ensure speed, scalability, and a premium user experience:

- **React 19:** Utilized for a reactive, component-based UI.
- **React Router DOM:** Enables seamless multi-page navigation without page reloads.
- **Vite:** Next-generation frontend tooling for fast development and optimized builds.
- **Vanilla CSS:** Custom styling used to achieve a "High-End Financial" aesthetic without the constraints of generic frameworks.
- **Phosphor Icons:** For consistent, high-quality iconography.
- **JavaScript (ES6+):** For core logic, data manipulation, and simulation.

---

## 5. Component Architecture
The project follows a modular architecture for maintainability:

### High-Level Structure:
1.  **Layout Wrapper (`PageLayout.jsx`):** A consistent wrapper for all feature pages containing headers and navigation.
2.  **Global Components:** `Header` and `Footer` persist across all routes.
3.  **Feature Components:** Each page (e.g., `AccountList.jsx`, `ReceiptChecker.jsx`) is a self-contained module containing its own logic and UI.
4.  **Data Layer (`mockData.js`):** A centralized source of truth for account balances and transaction history, simulating a backend database.
5.  **Route Manager (`App.jsx`):** Handles URL mapping and global application effects (like scroll reveal animations).

---

## 6. Features Breakdown

### ✅ 1. Account List
A centralized table displaying all verified users. It supports real-time sorting and asset visualization, providing a quick health check of the ecosystem.

### ✅ 2. Transaction Undo
Integrates a safety mechanism that logs every ledger change. Users can "undo" specific transactions to safely return funds to the original account in case of a failure or error.

### ✅ 3. Settlement Queue
Implements a first-in-first-out (FIFO) processing system. This ensures that even during high traffic, transactions are cleared in the exact order they were submitted, maintaining data integrity.

### ✅ 4. Receipt Checker
A search-based utility for verification. By entering a receipt ID, users can instantly check if a transaction exists in the official records.

### ✅ 5. Value Sorter
A ranking tool that identifies High-Net-Worth (HNW) accounts. It sorts the database by total financial value, essential for prioritization and reporting.

### ✅ 6. Bank Transfer Map
A visual representation of the currency flow. It outlines how money traverses through different intermediary banks during global transfers.

### ✅ 7. Cheapest Currency Route
A cost-optimization engine. It analyzes multiple currency conversion paths (e.g., USD to EUR vs USD to GBP to EUR) to find the route with the lowest fees.

### ✅ 8. Trade Limit Maximizer
Ensures operational efficiency by batching trades to meet maximum approval limits, reducing the number of individual processing steps required.

---

## 7. Screenshots
*(Add your final project screenshots here)*

---

## 8. Conclusion
FinMesh Ledger successfully bridges the gap between complex financial logic and intuitive user interface design. By implementing safety features like Transaction Undo and optimization tools like Currency Route finding, the project demonstrates a professional-grade approach to Fintech development. The system is scalable, visually premium, and meets all technical requirements set in the problem statement.

---

## 9. Links
- **GitHub:** [Link to GitHub](https://github.com/your-username/finmesh-ledger)
- **Live Site:** [Link to Live Demo](https://your-live-demo-link.com)
