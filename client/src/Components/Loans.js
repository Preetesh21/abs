import React, {useState} from 'react';
import LoanService from '../Services/LoanService';
import { confetti } from 'dom-confetti';

function Todos() {
    const [value, setValue] = useState('');
    const [value2,setValue2]=useState('');
    const [value3, setValue3] = useState('');
    const [value4,setValue4]=useState('');
    const [value5, setValue5] = useState('');
    const [value6,setValue6]=useState('');
    const [value7,setValue7]=useState('');
    const [value8, setValue8] = useState('');
    const [value9,setValue9]=useState('');
    const [value10, setValue10] = useState('');
    const [value11,setValue11]=useState('');
    const [message,setMessage] = useState(null);

    async function handleSubmit(e) {
      e.preventDefault();
      const data = { 
        gender: value,
        marital:value2,
        dependents:value3,
        education:value4,
        status:value5,
        appincome:value6,
        coapincome:value7,
        loan:value8,
        loanterm:value9,
        credit:value10,
        property:value11,
     };
      const ans=await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {console.log(res)
            const { message,predict } = res;
            setMessage(message);
            data.predict=predict;
        });
        LoanService.postLoan(data).then(data =>{
        });
    }

    function handleValue(e) {
      setValue(e.target.value);
    }
    function handleValue2(e) {
        setValue2(e.target.value);
      }
    function handleValue3(e) {
    setValue3(e.target.value);
    }
    function handleValue4(e) {
        setValue4(e.target.value);
    }
    function handleValue5(e) {
        setValue5(e.target.value);
      }
    function handleValue6(e) {
        setValue6(e.target.value);
    }
    function handleValue7(e) {
        setValue7(e.target.value);
      }
    function handleValue8(e) {
    setValue8(e.target.value);
    }
    function handleValue9(e) {
        setValue9(e.target.value);
    }
    function handleValue10(e) {
        setValue10(e.target.value);
      }
    function handleValue11(e) {
        setValue11(e.target.value);
    }
    const getStyle = (props)=>{
        let baseClass = "alert ";
        if(props.message.msgError)
            baseClass = baseClass + "alert-danger";
        else
            baseClass = baseClass + "alert-primary";
        return baseClass + " text-center";
    }
    const Message = props=>{
        return(
            <div className={getStyle(props)} role="alert">
                {props.message}
            </div>
        )
    }
    const button = document.querySelector(".example")
    if(message==="Congrats u r passed!!!"){
      confetti(button,{
        angle: "342",
        spread: 360,
        startVelocity: "30",
        elementCount: "183",
        dragFriction: "0.09",
        duration: "4020",
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      })
    }
    return (
      <section id="app" className="container">
      <h1 className=" text-center example ">Loan Prediction Form</h1>
        <form action="" onSubmit={handleSubmit}>

                <p>Please select your gender:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue} name="gender" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue} name="gender" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Female</label>
                </div>

                <p>Please select your Marital Status:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue2} name="married" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Yes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue2} name="married" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">No</label>
                </div>

                <p>Please select your number of Dependents:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue3} name="dependent" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">None</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue3} name="dependent" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">One</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue3} name="dependent" value="2" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Two</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue3} name="dependent" value="3" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">More</label>
                </div>

                <p>Please select your Education Status:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue4} name="edu" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Graduate</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue4} name="edu" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Non Graduate</label>
                </div>
                <p>Please select your Status:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue5} name="status" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Self Employed</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue5} name="status" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Not Self Employed</label>
                </div>
  <br></br>
                <label htmlFor="applicationincome">Application-Income</label>
                <input className="form-control" type="number" onChange={handleValue6} id="applicationincome" name="appincome"/>
                
                <label htmlFor="coapplicationincome">Co-Application-Income</label>
                <input className="form-control" type="number" onChange={handleValue7} id="coapplicationincome" name="coappincome"/>
                
                <label htmlFor="applicationincome">Loan Amount</label>
                <input className="form-control" type="number" onChange={handleValue8} id="applicationincome" name="loanamount"/>
                
                <label htmlFor="coapplicationincome">Loan Amount Term</label>
                <input className="form-control" type="number" onChange={handleValue9} id="coapplicationincome" name="loanamountterm"/>
                
                <label htmlFor="applicationincome">Credit History</label>
                <input className="form-control" type="number" onChange={handleValue10} id="applicationincome" name="credit history"/>
                
                <p>Please select your Property Area:</p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue11} name="prop" value="0" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Urban</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue11} name="prop" value="1" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Semi Urban</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" onChange={handleValue11} name="prop" value="2" id="exampleRadios1" />
                  <label className="form-check-label" htmlFor="exampleRadios1">Rural</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            </form>
            {message ? <Message message={message}/> : <p></p>}
      </section>
    );
  }
  export default Todos;
