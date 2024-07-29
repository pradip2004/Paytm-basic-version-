import React from 'react'
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputComponent from "../components/InputComponent"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"

function Signup() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-[25rem] text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputComponent placeholder="Pradip" label={"First Name"} />
          <InputComponent placeholder="Sadhukhan" label={"Last Name"} />
          <InputComponent placeholder="pradip@gmail.com" label={"Email"} />
          <InputComponent placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  )
}

export default Signup