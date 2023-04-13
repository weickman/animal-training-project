import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";
import {useRouter} from "next/router";
import animal from '../../server/mongodb/models/animal';


 const checkLogin = async (owner, animalName, date, hoursTrained, profile) => {
        return await axios.post('/api/user/object', {
            "email": owner,
          }).then((response) => {
            createAnimal(response.data, animalName, date, hoursTrained, profile)
          }).catch(function (e) {
            return e.response.data
          });


 }

 const createAnimal = async (owner, animalName, date, hoursTrained, profile) => {
        return await axios.post('/api/animal', {
            "name": animalName,
            "hoursTrained": hoursTrained,
            "date": date,
            "profilePicture": profile,
            "owner": owner
          }).then((response) => {
            alert(response.data)
          }).catch(function (e) {
            return e.response.data
          });

 }

 
  
    
    export default function Animal() {

    

    const [animalName, setAnimalName] = useState('');
    const [hoursTrained, sethoursTrained] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [profile, setProfile] = useState('');
    
    return (
        <div style= {{display: 'flex', justifyContent: "center", textAlign: "center", width: "100%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '600px', rowGap: '15px', textAlign: "center"}}>
            <h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}>
                Add Animal
                </h1>

        <TextField id="outlined-basic" label="Animal Name" variant="outlined" type="text"
                    name="Animal Name" fullWidth={true} value={animalName} onChange={(event) => {
            setAnimalName(event.target.value)
        }}
        />  
 

        <TextField id="outlined-basic" label="Hours Trained" variant="outlined" type="text"
                    name="Hours Trained" fullWidth={true} value={hoursTrained} onChange={(event) => {
            sethoursTrained(event.target.value)
        }}
        />
       
        <TextField id="outlined-basic" label="Email" variant="outlined" type="text"
                    name="Email" fullWidth={true} value={owner} onChange={(event) => {
            setOwner(event.target.value)
        }}
        />

        <TextField id="outlined-basic" label="Date" variant="outlined" type="text"
                    name="Date" fullWidth={true} value={date} onChange={(event) => {
            setDate(event.target.value)
        }}
        />

         <TextField id="outlined-basic" label="Profile" variant="outlined" type="text"
                    name="Profile" fullWidth={true} value={profile} onChange={(event) => {
            setProfile(event.target.value)
        }}
        />

    
        {}
            <Button fullWidth={true} onClick={() => {
                    return checkLogin(owner, animalName, date, hoursTrained, profile);
                    
                }} variant="contained">Add Animal</Button>
                </Box>
            </div>
                                                
    )
            
        
}
            
