import React, {useState,useContext,useEffect} from 'react';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const Todos = props =>{

    return(
        <div>
            <br/>
            <form>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text" 
                       name="todo" 
                       className="form-control"
                       placeholder="Please Enter Todo"/>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Submit</button>
            </form>
           
        </div>
    );

}

export default Todos;