import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";
import {useRouter} from "next/router";
import animal from '../../server/mongodb/models/animal';


 const checkLogin = async (userPassword, userEmail, animalName, userDate, userHours, userDescription) => {

        const email = userEmail
        return await axios.post('/api/user/login', {
            "email": email,
            "password": userPassword
          }).then((response) => {
            checkAnimal(userDate, userHours, response.data, animalName, userDescription)
          }).catch(function (e) {
            return e.response.data
          });


 }

 const checkAnimal = async (userDate, userHours, userID, animalName, userDescription) => {


        return await axios.post('/api/animal/login', {
            "userID": userID,
            "animalName": animalName
          }).then((response) => {
            createTrainingLog(userDate, response.data, userHours, userID, userDescription)
          }).catch(function (e) {
            return e.response.data
          });

 }

 const createTrainingLog = async (userDate, animalID, userHours, userID, userDescription) => {
        // alert("in createTraining")
        // alert("checkAnimal: " + animalID)
        // alert("userID: " + userID)
        
        
        return await axios.post('/api/training', {
            "date": userDate,
            "animal": animalID,
            "hours": userHours,
            "user": userID,
            "description": userDescription
        }).then((response) => {
            alert("Successfully added to training log")
        }).catch(function (e) {
            return e.response.data
          });
    
 }

  
  
    
    export default function Training() {

    

    const [animalName, setAnimalName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userDate, setDate] = useState('');
    const [userHours, setHours] = useState('');
    const [userDescription, setUserDescription] = useState('');
    
    return (
        <div style= {{display: 'flex', justifyContent: "center", textAlign: "center", width: "100%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '600px', rowGap: '15px', textAlign: "center"}}>
            <h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}>
                Training Log
                </h1>

        <TextField id="outlined-basic" label="Animal Name" variant="outlined" type="text"
                    name="Animal Name" fullWidth={true} value={animalName} onChange={(event) => {
            setAnimalName(event.target.value)
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

        <TextField id="outlined-basic" label="Date" variant="outlined" type="text"
                    name="date" fullWidth={true} value={userDate} onChange={(event) => {
            setDate(event.target.value)
        }}
        />

         <TextField id="outlined-basic" label="Hours" variant="outlined" type="text"
                    name="hours" fullWidth={true} value={userHours} onChange={(event) => {
            setHours(event.target.value)
        }}
        />

        <TextField id="outlined-basic" label="dDescription" variant="outlined" type="text"
                    name="Description" fullWidth={true} value={userDescription} onChange={(event) => {
            setUserDescription(event.target.value)
        }}
        />
        {}
            <Button fullWidth={true} onClick={() => {
                    return checkLogin(userPassword, userEmail, animalName, userDate, userHours, userDescription);
                    
                }} variant="contained">Add Training</Button>
                </Box>
            </div>
                                                
    )
            
        
}
            
