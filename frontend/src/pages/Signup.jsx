import React, { useState } from 'react'
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputComponent from "../components/InputComponent"
import {Button} from "../components/Button"
import BottomWarning from "../components/BottomWarning"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-[25rem] text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputComponent onChange={(e)=>{
            setFirstname(e.target.value)
          }} placeholder="Pradip" label={"First Name"} />
          <InputComponent onChange={(e)=>{
            setLastname(e.target.value)
          }} placeholder="Sadhukhan" label={"Last Name"} />
          <InputComponent onChange={(e)=>{
            setUsername(e.target.value)
          }} placeholder="pradip@gmail.com" label={"Email"} />
          <InputComponent onChange={(e)=>{
            setPassword(e.target.value)
          }} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button onClick={ async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                firstname,
                lastname,
                username,
                password
              })
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }} label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup