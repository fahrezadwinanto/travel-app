"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClient, setIsClient] = useState(false);
  
  const optionRole = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ];

  console.log(role);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let bgStyle =
    "bg-[url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover h-screen rounded-lg w-full";


  return (
    <div className="grid lg:flex gap-3 min-h-screen items-center justify-center p-5">
      <div className=' w-full'>
        <p className='text-xl font-bold text-center'>Register Your Account</p> 
         <div className='flex items-center justify-center'>
          <div className='flex flex-col w-[400px] gap-3 ml-5'>
            <Input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" placeholder="Confirm Password" onChange={(e) => setPasswordRepeat(e.target.value)} />

            {isClient && (
            <Select 
              onChange={(e) => setRole(e.value)} 
              options={optionRole}
              />
            )}

            <Input type="text" placeholder="Profile Picture URL" onChange={(e) => setProfilePictureUrl(e.target.value)}/>
            <Input type="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
            <Button className='bg-blue-700'>Register</Button>
            <p className='text-sm'>Already have an account? <Link className='font-bold text-blue-700 text-sm' href="/login">Login</Link></p>
         </div>
        </div>
      </div>
      <div className={bgStyle}></div>
    </div>
  );
};

export default Register;