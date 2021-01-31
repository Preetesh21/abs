import React, {useState,useContext,useEffect} from 'react';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

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

    function handleSubmit(e) {
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
      console.log('submit');
      console.log(data);
      fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res));
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
    return (
      <section id="app">
        <form action="" onSubmit={handleSubmit}>
                
                <div className="form-check ">
                <p>Please select your gender:</p>
                <label className="form-check-label m-2" htmlFor="male">Male</label>
                <input className="form-check-input" type="radio"  onChange={handleValue}  id="male" name="gender" value="1"/>
                <label className="form-check-label" htmlFor="female">Female</label>
                <input className="form-check-input" type="radio"  onChange={handleValue}  id="female" name="gender" value="0"/>
                </div>

                <div className="form-check">
                <p>Please select your Marital Status:</p>
                <label className="form-check-label m-2" htmlFor="age1">Yes</label>
                <input className="form-check-input" type="radio" onChange={handleValue2} id="age1" name="married" value="1"/>
                <label className="form-check-label" htmlFor="age2">No</label> 
                <input className="form-check-input" type="radio"  onChange={handleValue2} id="age2" name="married" value="0"/> 
                </div>

                <div className="form-check">
                <p>Please select your number of Dependents:</p>
                <label className="form-check-label m-2" htmlFor="male">Zero</label>
                <input className="form-check-input" type="radio" onChange={handleValue3} id="male" name="dependent" value="0"/>
                <label className="form-check-label" htmlFor="male">One</label>
                <input className="form-check-input" type="radio" onChange={handleValue3} id="male" name="dependent" value="1"/>
                <label className="form-check-label" htmlFor="female">Two</label>
                <input className="form-check-input" type="radio" onChange={handleValue3} id="female" name="dependent" value="2"/>
                <label className="form-check-label" htmlFor="male">More</label>
                <input className="form-check-input" type="radio" onChange={handleValue3} id="male" name="dependent" value="3"/>
                </div>

                <div className="form-check">
                <p>Please select your Education Status:</p>
                <label className="form-check-label m-2" htmlFor="age1">Graduate</label>
                <input className="form-check-input" type="radio" onChange={handleValue4} id="age1" name="edu" value="1"/>
                <label className="form-check-label" htmlFor="age2">Non Graduate</label>  
                <input className="form-check-input" type="radio" onChange={handleValue4} id="age2" name="edu" value="0"/>
                </div>

                <div className="form-check">
                <p>Please select your Status:</p>
                <label className="form-check-label m-2" htmlFor="age1">Self Employed</label>
                <input className="form-check-input" type="radio" onChange={handleValue5} id="age1" name="status" value="1"/>
                <label className="form-check-label" htmlFor="age2">Not Self Employed</label>
                <input className="form-check-input" type="radio" onChange={handleValue5} id="age2" name="status" value="0"/>
                </div>

                
                <label htmlFor="applicationincome">application-Income</label>
                <input className="form-control" type="number" onChange={handleValue6} id="applicationincome" name="appincome"/>
                
                <label htmlFor="coapplicationincome">coapplication-Income</label>
                <input className="form-control" type="number" onChange={handleValue7} id="coapplicationincome" name="coappincome"/>
                
                <label htmlFor="applicationincome">Loan Amount</label>
                <input className="form-control" type="number" onChange={handleValue8} id="applicationincome" name="loanamount"/>
                
                <label htmlFor="coapplicationincome">Loan Amount Term</label>
                <input className="form-control" type="number" onChange={handleValue9} id="coapplicationincome" name="loanamountterm"/>
                
                <label htmlFor="applicationincome">Credit History</label>
                <input className="form-control" type="number" onChange={handleValue10} id="applicationincome" name="credit history"/>
                
                <div className="form-check">
                <p>Please select your Property Area:</p>
                <label className="form-check-label m-2" htmlFor="male">Urban</label>
                <input className="form-check-input" type="radio" onChange={handleValue11} id="male" name="prop" value="0"/>
                <label className="form-check-label" htmlFor="male">Semi Urban</label>
                <input className="form-check-input" type="radio" id="male" onChange={handleValue11} name="prop" value="1"/>
                <label className="form-check-label" htmlFor="female">Rural</label>
                <input className="form-check-input" type="radio" id="female" onChange={handleValue11} name="prop" value="2"/>
</div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            </form>
        
      </section>
    );
  }
  export default Todos;
