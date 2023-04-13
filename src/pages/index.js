import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Box } from '@mui/material';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Animal Training</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box
        sx={{
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}> 

      <Link href="/"><h1> Animal Training </h1></Link>
      <Link href="/login">Login </Link>
      
      </Box>
    </div>
  )
}
