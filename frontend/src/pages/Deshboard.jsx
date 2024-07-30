import React from 'react'
import {Appbar} from '../components/Appbar'
import {Balance} from '../components/Balance'
import {Users} from '../components/Users'

function Deshboard() {
  return (
    <div>

      <Appbar />
      <div className='mx-36 my-10'>
        <Balance value={"10000"} />
        <Users />
      </div>
    </div>
  )
}

export default Deshboard