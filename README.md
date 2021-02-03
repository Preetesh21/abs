# ABS

Albus Banking System
This app was built by me as a practice app for MERN Stack.

For this project I have used MongoDB for storing the user data.Express in the backend and React in the frontend.
There is a second server running as well which contains the python model of the Loan Risk Prediction System which classifies if the person would get a loan or not.

An initial attempt was made by me to make the machine learning model using the Tensorflow JS framework but the accuracy of the model was even below a normal guess.
So had to eventually give up on that line of work and use Flask and sklearn in python to accomplish the task.
Here is animated GIF of the app:

![homepage](gif.gif)

## Tech Stack

- ### Frontend

        React
        Bootstrap
        Sass
        CSS

- ### Backend

        Express JS
        Flask

- ### Database

        MongoDB

- ### Server/Runtime

        Node JS

## How to run locally

- Install Node and MongoDB(if not using cloud platform) on your system.
- Clone the repository on your system.
- Move into the server folder and Run the command in the terminal

```js

npm install
nodemon app.js

```

- Then open another terminal and run the commands after entering the directory client

```js

npm install
npm start

```

- Then open another terminal and run the following commands in flask directory

```

pip install requirements.txt
python app.py

```

- Visit "http://localhost:3000" on your browser
- Now you are all set to start!


## Database Models Used

## Machine Learning Model

## Workflow



## Directory Structre

```
|-- README.md
|-- client
|   |-- node_modules
|   |-- README.md
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   |-- background.jpg
|   |   |-- favicon.ico
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   `-- robots.txt
|   |-- src
|   |   |-- App.js
|   |   |-- Components
|   |   |   |-- Admin.js
|   |   |   |-- Home.js
|   |   |   |-- Loans.js
|   |   |   |-- Login.js
|   |   |   |-- Message.js
|   |   |   |-- Navbar.js
|   |   |   |-- Register.js
|   |   |   `-- Unauthorized.js
|   |   |-- Context
|   |   |   `-- AuthContext.js
|   |   |-- Services
|   |   |   |-- AuthService.js
|   |   |   `-- LoanService.js
|   |   |-- hocs
|   |   |   |-- PrivateRoute.js
|   |   |   `-- UnPrivateRoute.js
|   |   |-- index.js
|   |   |-- react-app-env.d.ts
|   |   `-- unauthorized.scss
|   `-- tsconfig.json
|-- flask
|   |-- __pycache__
|   |   `-- app.cpython-38.pyc
|   |-- app.py
|   |-- classifier.py
|   |-- data.csv
|   |-- model
|   |   |-- AdaBoost.pkl
|   |   |-- Decision_Tree_Classifier.pkl
|   |   |-- Gaussian_Naive_Bayes.pkl
|   |   |-- KNN.pkl
|   |   |-- Logistic_Regression.pkl
|   |   |-- Multi_Layer_Perceptron.pkl
|   |   |-- Random_Forest.pkl
|   |   `-- SVC_Linear.pkl
|   |-- requirements.txt
|   `-- templates
|       `-- index.html
|-- gif.gif
`-- server
    |-- node_modules
    |-- app.js
    |-- models
    |   |-- Loan.js
    |   `-- User.js
    |-- package-lock.json
    |-- package.json
    |-- passport.js
    `-- routes
        `-- User.js
```