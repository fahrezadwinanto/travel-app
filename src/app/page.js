"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    alert("Clicked");
  };

  return (
    // Ini akan menjadi welcome page
    <div className="flex items-center justify-center w-screen h-screen">
      <h1 className="text-2xl font-Bold">Travel.Inc</h1>
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
      <Link href={"/register"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}