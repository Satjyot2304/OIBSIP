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