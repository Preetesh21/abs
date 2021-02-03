import React from 'react';

const Home = ()=>(
    <>
    <h1 className="text-center">Home Page</h1>
    <p>This site was built by me as a practice app for MERN Stack.For this project I have used MongoDB for storing the user data.Express in the backend and React in the frontend.
    There is a second server running as well which contains the python model of the Loan Risk Prediction System which classifies if the person would get a loan or not.An initial attempt was made by me to make the machine learning model using the Tensorflow JS framework but the accuracy of the model was even below a normal guess.So had to eventually give up on that line of work and use Flask and sklearn in python to accomplish the task.</p>
    </>
)

export default Home;