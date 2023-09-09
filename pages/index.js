import { useEffect } from 'react'
import { useState } from 'react'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect


   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      { <Form /> }
      {/* This page should receive the images array */}
    </div>
  );
}

