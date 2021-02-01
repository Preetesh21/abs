export default {
    getLoans : ()=>{
        return fetch('/user/loans')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    postLoan : data=>{
        return fetch('/user/loans',{
            method : "post",
            body : JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    }
}