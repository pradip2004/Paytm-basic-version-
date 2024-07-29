import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputComponent from '../components/InputComponent'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'

function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-[25rem] text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputComponent placeholder={"pradip@gmail.com"} label={"Email"} />
          <InputComponent placeholder={"123456"} label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div >
      </div >
    </div >
  )
}

export default Signin