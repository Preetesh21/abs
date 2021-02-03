import React from 'react';

var style={  
    backgroundImage: "url(" + "https://wallpapercave.com/wp/wp2752752.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:'100%',
    height: '696px',
  }


const Home = ()=>(
    <div style={ style }>
    <div className="container">
    <h1 className="text-center text-white container">Home Page</h1><br></br>
    <p ><b>This site was built by me as a practice app for MERN Stack.For this project I have used MongoDB for storing the user data.Express in the backend and React in the frontend.
    There is a second server running as well which contains the python model of the Loan Risk Prediction System which classifies if the person would get a loan or not.An initial attempt was made by me to make the machine learning model using the Tensorflow JS framework but the accuracy of the model was even below a normal guess.So had to eventually give up on that line of work and use Flask and sklearn in python to accomplish the task.</b></p>
    </div>
    </div>
)

export default Home;