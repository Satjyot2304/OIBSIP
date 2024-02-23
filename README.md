1 .
# Simple Calculator
This is a simple calculator web application built using HTML, CSS, and JavaScript.

## Features
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Parentheses support for complex calculations
- Percentage calculation
- Square root calculation
- Backspace and Clear functionality
- Visual feedback with button animations

## Usage
To use the calculator, simply open the `index.html` file in your web browser.

2.
## Tribute Page
This is a simple tribute page dedicated to J.R.R. Tolkien, the renowned English writer, poet, and philologist, best known for his iconic works in the fantasy genre.

3.
# To-Do App
This is a simple To-Do web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, and delete them.

## Features
- Add new tasks: Users can input a task and add it to the list.
- Mark tasks as completed: Users can mark tasks as completed once they are done.
- Delete tasks: Users can delete tasks from the list.

## Usage
1. Open the `index.html` file in a web browser.
2. Enter a task in the input field and click the "Add Task" button to add it to the pending tasks list.
3. Once a task is completed, click the "Complete" button to move it to the completed tasks list.
4. To delete a task, click the "Delete" button next to the task.

## Project Structure
- `index.html`: HTML file containing the structure of the To-Do app.
- `styles.css`: CSS file containing styles for the app.
- `script.js`: JavaScript file containing the functionality for adding, completing, and deleting tasks.

4.
# Login Authentication System
This is a simple login authentication system built using Flask, a Python web framework. It allows users to register, login, and access a secured page.

## Features
- User registration: Users can sign up by providing a username and password.
- Secure storage: User passwords are securely hashed before storage to enhance security.
- User login: Users can log in with their registered credentials.
- Secured page: Access to a secured page is restricted to authenticated users only.

## Technologies Used
- Python
- Flask
- hashlib (for password hashing)

## Usage
1. Install Python and Flask if not already installed.
2. Run the Flask application:
    ```
    python login_system.py
    ```
3. Access the application in your web browser at `http://localhost:5000`.
4. Access the registered users at `http://localhost:5000/check_users`.

## Project Structure
```
├── login_system.py         # Flask application file
├── templates               # Folder to store HTML templates
│   ├── index.html          # HTML template for login/registration form
│   └── secured_page.html   # HTML template for secured page
└── README.md               # Project documentation
```

This project follows a simple structure with the Flask application file `login_system.py`, HTML templates stored in the `templates` folder, and project documentation in the `README.md` file.
