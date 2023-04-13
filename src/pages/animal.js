import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";





 const checkRegister = async (userFN, userLN, userPassword, userEmail) => {
        const firstName = userFN
        const lastName = userLN
        const password = userPassword
        const email = userEmail

        return await axios.post('/api/animal', {
            "name": 'a'
            // "firstName": firstName,
            // "lastName": lastName,
            // "email": email,
            // "password": password
          }).then((response) => {
            alert(response.data)
          }).catch(function (e) {
            alert("User information invalid")
          });

    
            };
    
    export default function Register() {
    

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userFN, setFirstName] = useState('');
    const [userLN, setLastName] = useState('');


    return (
        <div style= {{display: 'flex', justifyContent: "center", textAlign: "center", width: "100%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '600px', rowGap: '15px', textAlign: "center"}}>
            <h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}>
                Register Page
                </h1>
               
        <TextField id="outlined-basic" label="First Name" variant="outlined" type="text"
                    name="First Name" fullWidth={true} value={userFN} onChange={(event) => {
            setFirstName(event.target.value)
        }}
        />

        <TextField id="outlined-basic" label="Last Name" variant="outlined" type="text"
                    name="Last Name" fullWidth={true} value={userLN} onChange={(event) => {
            setLastName(event.target.value)
        }}
        />

        <TextField id="outlined-basic" label="Email" variant="outlined" type="text"
                    name="userEmail" fullWidth={true} value={userEmail} onChange={(event) => {
            setEmail(event.target.value)
        }}
        />
               
        <TextField id="outlined-basic" label="Password" variant="outlined" type="text"
                    name="userPassword" fullWidth={true} value={userPassword} onChange={(event) => {
            setPassword(event.target.value)
        }}
        />
            
        {}
            <Button fullWidth={true} onClick={() => {
                    return checkRegister(userFN, userLN, userPassword, userEmail);
                    
                }} variant="contained">Register</Button>
                </Box>
            </div>
                                                
    )
            
        
}
            
