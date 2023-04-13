import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";
import {useRouter} from "next/router";




 const verifyUser = async (userEmail, userPassword, router) => {

    const password = userEmail
        const email = userPassword
        let data = ""
        return await axios.get('/api/user/verify', {
            email: email,
            password: password
          }).then((response) => {
            router.push('/api/admin/users?page=1')
          }).catch(function (e) {
            alert(e.response.data)
          });
            };
const verifyAnimal = async (userEmail, userPassword, router) => {

    const password = userEmail
        const email = userPassword
        let data = ""
        return await axios.get('/api/user/verify', {
            email: email,
            password: password
            }).then((response) => {
            router.push('/api/admin/animals?page=1')
            }).catch(function (e) {
            alert(e.response.data)
            });
            };  
const verifyTraining = async (userEmail, userPassword, router) => {

    const password = userEmail
        const email = userPassword
        let data = ""
        return await axios.get('/api/user/verify', {
            email: email,
            password: password
            }).then((response) => {
            router.push('/api/admin/training?page=1')
            }).catch(function (e) {
            alert(e.response.data)
            });
            };  
    
    export default function Verify() {
    

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const router = useRouter()
    
    return (
        <div style= {{display: 'flex', justifyContent: "center", textAlign: "center", width: "100%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '600px', rowGap: '15px', textAlign: "center"}}>
            <h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}>
                Verify
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
                    return verifyUser(userPassword, userEmail, router);
                    
                }} variant="contained">Users</Button>
            <Button fullWidth={true} onClick={() => {
                    return verifyAnimal(userPassword, userEmail, router);
                    
                }} variant="contained">Animals</Button>
                <Button fullWidth={true} onClick={() => {
                    return verifyTraining(userPassword, userEmail, router);
                    
                }} variant="contained">Training Logs</Button>
                </Box>
            </div>
                                                
    )
            
        
}
            
