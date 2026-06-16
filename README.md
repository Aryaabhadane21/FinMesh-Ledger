# FinMesh Ledger 🚀

FinMesh Ledger is a premium, multi-page financial application designed for trading money between people and accounts. It ensures transparent tracking, real-time ledger management, and cost-optimized currency conversions.

## 🔗 Links
- **Live Demo:** [Link to Live Site](https://your-live-demo-link.com)
- **GitHub Repository:** [Link to GitHub](https://github.com/your-username/finmesh-ledger)

## 🛠️ Tech Stack
- **Frontend Framework:** React 19 (Vite)
- **Routing:** React Router DOM v7
- **Icons:** Phosphor Icons
- **Styling:** Vanilla CSS (Custom System with CSS Variables)
- **Design:** Modern UI with Glassmorphism, Playfair Display typography, and smooth scroll reveals.

## ✨ Core Features
The system implements all "Must Have" features for a robust financial ledger:

1.  **Account List:** A comprehensive table showcasing balances and assets across all verified user accounts with sorting capabilities.
2.  **Transaction Undo:** A safety-first ledger log that allows administrators to reverse transfers in case of errors.
3.  **Settlement Queue:** A FIFO (First-In-First-To) system that manages pending transactions in chronological order.
4.  **Receipt Checker:** An instant verification tool to validate transaction receipt numbers against account records.
5.  **Value Sorter:** A ranking tool that organizes accounts based on their total financial value.
6.  **Bank Transfer Map:** A visualization system mapping the movement of funds between different banking institutions.
7.  **Cheapest Currency Route:** A smart pathfinding tool that calculates the most cost-effective way to convert currencies (e.g., USD → GBP → EUR).
8.  **Trade Limit Maximizer:** An optimization module that batches trades to hit maximum approval limits for faster processing.

## 📸 Screenshots
*(Add your screenshots here)*
| Home Overview | Account List |
| :---: | :---: |
| ![Home Page](public/screenshots/home.png) | ![Account List](public/screenshots/accounts.png) |

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/finmesh-ledger.git
    cd finmesh-ledger
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    npm run preview
    ```

## 📂 Project Structure
```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Header, Footer, Layout)
├── data/            # Mock data and initial state
├── pages/           # Individual page views
├── styles/          # Global CSS and theme variables
└── App.jsx          # Main application routing and logic
```

## 📝 License
Distributed under the MIT License.
