# SmartReceipt

smartReceipt is a cutting-edge digital receipt management system designed to simplify and modernize the way receipts are handled. It provides an intuitive user interface powered by React.js and a robust backend developed with Python and Flask. 

This system allows businesses to generate, store, and manage digital receipts, offering a more efficient and eco-friendly solution compared to traditional paper receipts.

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

smartReceipt is aimed at providing businesses and customers with a seamless way to issue, store, and retrieve digital receipts. With the rising need for paperless transactions, this platform serves as a modern alternative that is both cost-effective and environmentally friendly.

### Key Objectives:
- Simplify receipt management.
- Minimize paper usage.
- Enhance customer experience through digital solutions.

---

## ⭐ Features

- **Digital Receipt Generation:** Issue receipts directly to customer emails or mobile devices.
- **Receipt Storage:** Centralized storage of receipts for easy access and management.
- **Search Functionality:** Quickly find receipts by date, customer name, or access_token automatically and uniquely generated by the system.
- **Responsive Design:** User-friendly interface accessible on any device.

---

## 🛠️ Tech Stack

###  Frontend:
- React.js
- HTML/CSS
- JavaScript

### Backend:
- Python (Flask Framework)
- MySQL (Database)

### Other Tools:
- Axios (API calls)
- npm (Node Package Manager)
- pip (Python Package Manager)

---

## 📥 Installation

### Prerequisites:

1. [Node.js](https://nodejs.org/) installed for the frontend.
2. [Python 3.8+](https://www.python.org/) installed for the backend.
3. A package manager (npm for frontend, pip for backend).
4. [Git](https://git-scm.com/) installed for cloning the repository.

---

## 🚀 Running the Project

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Doctware/SmartReceipt_V1s.0-.git
   cd SmartReceipt_V1s.0/backend
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up environment variables by creating a `.env` file:
   ```bash
   touch .env
   ```
   Add the following variables:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   DATABASE_URL=sqlite:///smartreceipt.db  # Replace with your DB URL if using MySQL
   ```

5. Initialize the database:
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

6. Run the backend server:
   ```bash
   flask run
   ```
   The server will be live at `http://127.0.0.1:5000`.

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for frontend configuration:
   ```bash
   touch .env
   ```
   Add the following variables:
   ```
   REACT_APP_API_URL=http://127.0.0.1:5000
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will be live at `http://localhost:3000`.

---

## 📖 Usage

1. Open the frontend in your browser: `http://localhost:3000`.
2. Register as a new user.
3. Then use the registered details, that is, the email and password used during the registration for a successful authentication.
4. You will be redirected to the UserDashboard, use the GenerateR Receipt to create the receipt.
5. Enter the details required in the fields required as some will automatically be filled by the system.
6. Ask the Buyer to sign within the signature canva.
7. Then press the generate button.
8. The receeipt for that particular transaction will have been generated successfully and can be retrieved and is locked to avoid modifications.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

---

## 🔐 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---<br>

### Happy Coding as we build the SmartReceipt into a new big thing! - Simple, Smart and Authentic. More Features on the way 🚀!
