# Code Reviewer

An AI-powered code reviewing tool that integrates **Gemini 2.0 Flash** to analyze and provide feedback on your code.

## 🚀 Features
- **AI-Powered Code Review**: Uses **Gemini 2.0 Flash** to analyze code and provide suggestions.
- **Simple & Intuitive UI**: A clean interface for editing and reviewing code.
- **Real-time Syntax Highlighting**: Integrated with **Prism.js** for a better coding experience.
- **Fast & Efficient Backend**: Built with **Node.js & Express.js** for seamless AI communication.

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/shekharrs/Code-Reviewer.git
cd Code-Reviewer
```

### **2️⃣ Install Dependencies**
```sh
# Install server dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```

### **3️⃣ Start the Server**
```sh
cd Backend
node index.js
```

### **4️⃣ Run the Frontend**
```sh
cd ../Frontend
npm start
```

---

## 📌 Project Structure
```
Code-Reviewer/
│── Backend/               # Backend server
│   ├── src/               # Source files
│   ├── server.js          # Express server setup
│   ├── .env               # Environment variables
│   ├── package.json       # Node.js dependencies
│   ├── package-lock.json  # Lock file for dependencies
│   ├── .gitignore         # Git ignored files
│
│── Frontend/              # Frontend application
│   ├── src/
│   │   ├── assets/        # Static assets like images
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styling
│   │   ├── main.jsx       # React entry point
│   │   ├── index.css      # Global styles
│   ├── public/            # Public assets like index.html
│   ├── package.json       # React dependencies
│   ├── package-lock.json  # Lock file for dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── eslint.config.js   # ESLint configuration
│   ├── README.md          # Documentation
│   ├── .gitignore         # Git ignored files
```

---

## 🔥 Tech Stack

### **Backend (Server)**
- **Node.js**
- **Express.js**
- **AI Model: Gemini 2.0 Flash**

### **Frontend (Client)**
- **React.js**
- **Prism.js** (for syntax highlighting)
- **React-Markdown** (for formatted AI responses)

---

## 💡 How It Works

1️⃣ **User writes or pastes code** into the editor.  
2️⃣ **Clicks the "Review" button**, which sends the code to the server.  
3️⃣ **Server processes the request** and forwards it to **Gemini 2.0 Flash AI**.  
4️⃣ **AI analyzes the code** and returns suggestions.  
5️⃣ **Review is displayed** on the right side in a markdown format.  

---

## 🤝 Contributing
Feel free to **fork**, **open issues**, or **submit pull requests** to improve this project!

---

## 📩 Contact & Links
- **Author**: [Shekhar Thakur](https://www.linkedin.com/in/thakurshekhar/)
- **GitHub**: [@shekharrs](https://github.com/shekharrs)

⭐ **If you find this project useful, give it a star!** 🚀✨

