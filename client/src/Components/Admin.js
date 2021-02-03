import React, {useState,useEffect} from 'react'
import LoanService from '../Services/LoanService';

function Admin() {
    const [loans,setLoans] = useState([]);
    useEffect(()=>{
        LoanService.getLoans().then(data =>{
            setLoans(data.loan);
        });
    },[]);

    return (
        <div className="container">
        <h1 className="text-center">All the Data</h1>
        <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>Gender</th>
            <th>Marital </th>
            <th>Dependents</th>
            <th>Education</th>
            <th>Status</th>
            <th>appincome</th>
            <th>coapincome</th>
            <th>loan</th>
            <th>loanterm</th>
            <th>credit</th>
            <th>property</th>
            <th>predict</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id}>
              <td>{loan.gender}</td>
              <td>{loan.marital}</td>
              <td>{loan.dependents}</td>
              <td>{loan.education}</td>
              <td>{loan.status}</td>
              <td>{loan.appincome}</td>
              <td>{loan.coapincome}</td>
              <td>{loan.loan}</td>
              <td>{loan.loanterm}</td>
              <td>{loan.credit}</td>
              <td>{loan.property}</td>
              <td>{loan.predict}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
    )
}
export default Admin
