# Recipe App

This is a simple Recipe App built with Django and React. It allows users to browse through different categories of recipes and view individual recipes in detail.

## Features

- Browse recipe categories
- View detailed information about each recipe
- API for recipes and categories

## Installation and Setup

### 1. Clone the repository


git clone https://github.com/adoyenne/module_F4.git
cd recipe_project

2. Set up the backend
2.1 Create a virtual environment


python3 -m venv venv
source venv/bin/activate  

# On Windows, use `venv\Scripts\activate`

2.2 Install the dependencies

pip install -r requirements.txt

2.3 Apply the migrations

python manage.py migrate

2.4 Run the development server

python manage.py runserver

The backend server should now be running at http://localhost:8000.

3. Set up the frontend:
   

3.1 Navigate to the frontend directory

cd recipe-frontend

3.2 Install frontend dependencies

npm install

3.3 Start the frontend server

npm start

The frontend server should now be running at http://localhost:3000.

4. Running the project
Once both the backend and frontend servers are running, you can open the application in your browser:

Backend: http://localhost:8000
Frontend: http://localhost:3000

API Documentation

The API documentation is available at http://localhost:8000/swagger/.
