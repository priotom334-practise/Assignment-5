🚀 DevStack Explorer
A modern platform for discovering and exploring technologies for your next development project.

📌 About The Project
DevStack Explorer is a modern, responsive web application built to help developers discover and explore a wide range of technologies used in software development.

The application provides an organized and user-friendly interface where developers can explore different technologies, understand their roles within the development ecosystem, and find suitable tools for building their projects.

Built with a component-based architecture and a modern frontend development workflow, the project emphasizes performance, scalability, maintainability, and responsive design.

🛠️ Technologies Used
React — Component-based UI development

TypeScript — Type-safe and maintainable application code

JavaScript — Application logic and interactivity

Tailwind CSS — Utility-first responsive styling

Vite — Fast development server and optimized build tooling

JSON — Structured technology data management

✨ Key Features
🔍 Technology Discovery
Browse and explore different development technologies through a structured and intuitive interface.

🗂️ Organized Technology Data
Technology information is maintained using structured JSON data, making the application easier to manage, update, and extend.

📱 Responsive & Modern UI
A clean and responsive interface built with Tailwind CSS, providing a consistent experience across desktop, tablet, and mobile devices.

🎯 Project Goal
The goal of DevStack Explorer is to provide developers with a centralized and easy-to-use platform for discovering technologies and exploring potential tools for their development stack.





## React Questions


What is JSX, and why is it used in React?
Ans: JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to write and understand.

What is the difference between props and state?
Ans: Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

What does the useState hook do, and where did you use it in this project?
Ans: useState is used to create and manage changing data in a component. 

What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect runs side-effect code after the component renders. I needed it to fetch the technology JSON data when the page first loads. Without it, the app would try to display the cards before the data was ready.

Why does every item in a .map() list need a unique key prop?
Ans: The key helps React identify which items in a list have changed, been added, or been removed. It makes rendering faster and prevents bugs, like the wrong card being removed when you click delete on a specific technology.

What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering means showing different UI based on certain conditions (using if statements or ternary operators). In this project, I used it in the sidebar: if the stack is empty, I show a message like "No technologies selected yet"; otherwise, I render the list of selected cards.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: A parent passes data to a child using props. To send something back, the parent can pass a function as a prop, and the child calls that function with the required data (e.g., onAdd(tech)).
