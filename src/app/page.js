"use client";
import { Button } from "@/components/ui/button";
import { ListMenuNavbarAdmin, ListMenuNavbarGuest } from "@/lib/constants";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import googleLogoHero from "../public/images/google.png";
import appleLogoHero from "../public/images/app_store.png";
import heroImage from "../public/images/hero.png";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], style: "normal", weight: ["100", "300", "400", "500", "600", "700", "800", "900"] });

export default function Home() {
    const handleClick = () => {
        alert("Clicked");
    };

    const role = "guest";
    const listMenu = role === "admin" ? ListMenuNavbarAdmin : ListMenuNavbarGuest;
    return (
        // Ini akan menjadi welcome page
        <>
            <div className="fixed w-full bg-gradient-to-b from-[#E2F6FC] to-[#E2F6FC] hidden md:flex">
                <header className="container mx-auto py-4">
                    <nav className="flex justify-between items-center">
                        <Link href="/" className="font-semibold text-[#42a7c3] text-xl">
                            Travl.ing
                        </Link>
                        <div className="flex gap-x-16">
                            {listMenu.map((item, index) => (
                                <Link key={index} href={item.url} className="text-sm text-gray-700 border-b border-transparent py-4 hover:border-b-slate-800 hover:duration-200">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <Button className="bg-[#FA8443] font-medium hover:bg-[#FA8443]/70">Sign In</Button>
                            <Button className="bg-[#FA8443] font-medium hover:bg-[#FA8443]/70">Sign Up</Button>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="fixed w-full bg-gradient-to-b from-[#E2F6FC] to-[#E2F6FC] p-4 flex md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <Link href="/" className="font-semibold text-[#42a7c3] text-xl">
                                    Travl.ing
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="h-full flex flex-col justify-between pb-8">
                            <div className="flex flex-col gap-x-16">
                                {listMenu.map((item, index) => (
                                    <Link key={index} href={item.url} className="text-sm w-fit text-gray-700 border-b border-transparent py-4 hover:border-b-slate-800 hover:duration-200">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Button className="bg-[#FA8443] font-medium hover:bg-[#FA8443]/70">Sign In</Button>
                                <Button className="bg-[#FA8443] font-medium hover:bg-[#FA8443]/70">Sign Up</Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <section className="bg-gradient-to-b from-[#E2F6FC] to-white min-h-screen">
                <div className="container mx-auto pt-20 grid grid-cols-2 gap-8 min-h-screen px-10 md:px-0">
                    <div className={`col-span-2 md:col-span-1 flex flex-col justify-center gap-y-6 ${fontPoppins.className}`}>
                        <h1 className="text-5xl font-semibold text-gray-800">Start your journey by one click, explore beautiful world!</h1>
                        <h2 className="text-gray-800">Plan and book your perfect trip with expert acvice, travel tips, destination information and inspiration from us!</h2>
                        <div>
                            <Button className="w-fit px-0">
                                <Image src={googleLogoHero} alt="logo-google" width={120} height={60} />
                            </Button>
                            <Button className="w-fit px-0">
                                <Image src={appleLogoHero} alt="logo-app-store" width={120} height={60} />
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                        <div className="relative w-full h-full">
                            <Image src={heroImage} alt="logo-app-store" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="font-medium text-7xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </>
        // <div className="flex items-center justify-center w-screen h-screen">
        //   <h1 className="text-2xl font-Bold">Travel.Inc</h1>
        //   <Link href={"/login"}>
        //     <Button>Login</Button>
        //   </Link>
        //   <Link href={"/register"}>
        //     <Button>Register</Button>
        //   </Link>
        // </div>
    );
}
