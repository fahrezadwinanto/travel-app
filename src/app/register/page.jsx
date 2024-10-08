"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadImage } from '@/lib/upload-image';
import { registerUser } from '@/service/user.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const Register = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [role, setRole] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  
  const optionRole = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ];

  
  

  const handleRegister = async () => {
    if (password !== passwordRepeat) {
      alert("Passwords do not match");
      return;
    }

    let uploadedPictureUrl = ""; // kalau user tidak isi foto, akan diisi dengan string kosong

    if (profilePictureUrl) {
      uploadedPictureUrl = await uploadImage(profilePictureUrl);
      console.log("URL profile picture:", uploadedPictureUrl);
      

      if (!uploadedPictureUrl) {
        alert("Failed to upload profile picture");
        return;
      }
  }

    // Upload gambar terlebih dahulu jika ada gambar yang dipilih
    // const uploadedImageUrl = await uploadImage();
    
    // if (!uploadedImageUrl) {
    //   return; // Jika gagal upload gambar, tidak melanjutkan proses registrasi
    // }

    const userData = {
      name,
      email,
      password,
      passwordRepeat,
      role,
      profilePictureUrl: uploadedPictureUrl, // Menggunakan URL gambar yang diupload
      phoneNumber
    };

    try {
      const response = await registerUser(userData);

      if(!response){
        alert("Register Failed");
        return;
      }

      console.log(response.status);
      
      if (response?.status === "OK") {
        router.push("/login");
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };


  

  useEffect(() => {
    setIsClient(true);
  }, []);

  let bgStyle =
    "hidden lg:flex bg-[url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover h-screen rounded-lg w-full";


    return (
      <div className="grid items-center justify-center min-h-screen gap-3 p-5 lg:flex">
        <div className='w-full'>
          <p className='text-xl font-bold text-center'>Register Your Account</p>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col w-[400px] gap-3 ml-5'>
              <Input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
              <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Input type="password" placeholder="Confirm Password" onChange={(e) => setPasswordRepeat(e.target.value)} />
  
              {isClient && (
              <Select 
                onChange={(e) => setRole(e.value)} 
                options={optionRole}
                />
              )}
  
            <Input type="file" accept="image/*" onChange={(e) => setProfilePictureFile(e.target.files[0])} /> {/* Input untuk memilih file gambar */}
            <Input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>

            <Button className='bg-blue-700' onClick={handleRegister}>Register</Button>
            <p className='text-sm'>Already have an account? <Link className='text-sm font-bold text-blue-700' href="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <div className={bgStyle}></div>
    </div>
  );
};

export default Register;