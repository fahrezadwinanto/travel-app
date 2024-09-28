"use client"
import { Button } from "@/components/ui/button";

export default function Home() {

  const handleClick = () => {
    alert("clicked");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Travel App</h1>
    </div>
  );
}
