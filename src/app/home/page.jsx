import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid">
        <div>Home Page</div>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;