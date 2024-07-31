import React, { useEffect, useState } from 'react'
import {Appbar} from '../components/Appbar'
import {Balance} from '../components/Balance'
import {Users} from '../components/Users'
import axios from 'axios'

function Deshboard() {
  const [balance, setBalance] = useState("")
  useEffect(() => {
    // Define an async function
    const fetchBalance = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        let number = res.data.balance;
        const formattedNumber = number.toFixed(2);
        setBalance(formattedNumber);
      } catch (error) {
        console.error("Error fetching balance:", error);
        // Handle error as needed, e.g., set a default value, show a message, etc.
      }
    };

    // Call the async function
    fetchBalance();
  }, []); 
  return (
    <div>

      <Appbar />
      <div className='mx-36 my-10'>
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  )
}

export default Deshboard