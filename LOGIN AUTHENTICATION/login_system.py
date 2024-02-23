from flask import Flask, render_template, request, redirect, session
import hashlib

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

# Data structure to store user information
users = {}

# Function to handle user registration
def register_user(username, password):
    if username in users:
        return "Username already exists. Please choose another one."
    else:
        # Hash and salt the password...
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        users[username] = hashed_password
        return "User registered successfully."

# Function to handle user login
def login_user(username, password):
    if username not in users:
        return "User not found. Please register."
    # Hash and salt the entered password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    # Compare hashed password with stored hashed password
    if users[username] == hashed_password:
        session['username'] = username
        return "Login successful."
    else:
        return "Invalid password."

# Function to display secured page
@app.route('/secured')
def show_secured_page():
    if 'username' in session:
        return render_template('secured_page.html', username=session['username'])
    else:
        return redirect('/login')

# Route to check users
@app.route('/check_users')
def check_users():
    return str(users)

# Function to handle registration and login forms
@app.route('/', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        if request.form['submit_button'] == 'Register':
            username = request.form['username']
            password = request.form['password']
            message = register_user(username, password)
            return render_template('index.html', message=message)
        elif request.form['submit_button'] == 'Login':
            username = request.form['username']
            password = request.form['password']
            message = login_user(username, password)
            if message == "Login successful.":
                return redirect('/secured')
            else:
                return render_template('index.html', message=message)
    return render_template('index.html', message='')

# Route to handle logout
@app.route('/logout')
def logout():
    # Clear the session data
    session.clear()
    # Redirect the user to the login page
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
