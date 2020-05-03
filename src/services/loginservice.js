import axios from 'axios';


const LoginService = {  
    LoginService: (email,password) => {
   const data={
    
        "email": email,
        "password": password
      
   }

    return new Promise((resolve, reject) => {
        //34.233.36.83
        //http://54.175.194.100:8080/create?browser=chrome&url=https://qaitdevlabs.com&multipage=true
        axios.post( `http://52e36341.ngrok.io/api/admins/login`, data).then(response => {
           
            resolve(response.headers);
        }).catch(err => {
           
            reject();
        })
    });
},

}


export default LoginService;