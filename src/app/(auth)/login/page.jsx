"use client";

import Link from "next/link";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LoginPage() {

const { register, handleSubmit } = useForm()

const [isVisible, setIsVisible] = useState(false);

const handleLogin = async (data) => {
    console.log("Trying to login with:", data.email);
    
    
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    callbackURL: "/",
    });
    
    // Login er Conditions 
    if (error) {
      
      toast.error(`Login Failed: ${error.message || "Invalid credentials!"}`);
      console.log("Login Error:", error);
    } 
    else if (res) {
      // Login success hole
      toast.success("Welcome back! Login Successful. 🎉");
    
    }
  };


return (
    
    
<div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
      
      {/* Card Container */}
 <div className="w-full max-w-112.5 bg-white rounded shadow-sm p-8 sm:p-12">
        
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Login your account
        </h2>
        <div className="border-b border-gray-200 mb-6"></div>

        {/* HeroUI Form logic merged with Tailwind styling */}
<Form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(handleLogin)}>
          
{/* Email Field */}
  <TextField
            
            name="email"
            type="email"
            className="flex flex-col gap-1"
            
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="font-bold text-gray-700 text-sm">Email address</Label>
            {/* Input styled like the screenshot */}
            <Input 
             {...register("email")}
              placeholder="Enter your email address" 
              className="bg-[#f3f4f6] border-none rounded-sm w-full p-3 text-sm " 
            />
            <FieldError className="text-red-500 text-xs mt-1 font-medium" />
  </TextField>

{/* Password Field */}
  <TextField
    name="password"
    className="flex flex-col gap-1 w-full"
    validate={(value) => {
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
        return null;
    }}
    >
    <Label className="font-bold text-gray-700 text-sm">Password</Label>
            
           
            <InputGroup className="bg-[#f3f4f6] rounded-sm focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200 flex items-center pr-2">
              
              <InputGroup.Input
                minLength={8}
                maxLength={8}
                {...register("password")}
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                
                className="w-full bg-transparent border-none p-3 text-sm focus:outline-none"
              />
              
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  type="button" 
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                  
                  className="text-gray-500 hover:text-gray-800 bg-transparent hover:bg-transparent"
                >
                  {isVisible ? <CgEye className="size-5" /> : <BsEyeSlash className="size-5" />}
                </Button>
              </InputGroup.Suffix>
              
            </InputGroup>


    <FieldError className="text-red-500 text-xs mt-1 font-medium" />
  </TextField>

{/* Login Button */}
    <Button 
            type="submit" 
            className="bg-[#424242] hover:bg-[#2b2b2b] text-white border-none rounded-sm mt-2 w-full py-3 transition-colors"
          >
            Login
    </Button>
</Form>

        {/* Register Link */}
        <p className="text-center mt-6 text-sm font-semibold text-gray-600">
          Don`t Have An Account ?{" "}
          <Link href="/register" className="text-red-500 hover:text-red-600 transition-colors hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}