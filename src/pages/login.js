import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";





 const checkLogin = async (userEmail, userPassword) => {

        const password = userEmail
        const email = userPassword
        let data = ""
        return await axios.post('/api/user/login', {
            email: email,
            password: password
          }).then((response) => {
            if (response.status == 403) {
                alert("User information invalid")
            } else {
                alert(response.data)
            }
            
          }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
             
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });

    

        return (
            <>
            
                <Link href="/"><h1>Better PokeAPI</h1></Link>
                <h2>email: {email}</h2>
                <h2>password: {password}</h2>
                 <h2> {data} </h2>
                    
                
            </>
        )
            };
    
    export default function Login() {
    

    const [userEmail, setEmail] = useState(' ');
    const [userPassword, setPassword] = useState(' ');


    return (
        <div>
                     <h1 style={{marginTop: "5px", width: "100%", justifyContent: "center"}}>
                            Login Page
                            </h1>
                            <p style={{marginTop: "1px", width: "100%"}}>
                            </p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="text"
                                name="userEmail" fullWidth={true} value={userEmail} onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    />
                    <p style={{marginTop: "1px", width: "100%"}}>
                            </p>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type="text"
                                name="userPassword" fullWidth={true} value={userPassword} onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    />
                     <p style={{marginTop: "1px", width: "100%"}}>
                            </p>
                    {}
                        <Button fullWidth={true} onClick={() => {
                                return checkLogin(userPassword, userEmail);
                                
                            }} variant="contained">Login</Button>
            </div>
                                                
    )
            
        
}
            
