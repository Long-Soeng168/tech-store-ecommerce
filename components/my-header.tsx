import { Menu, Search, SearchCheckIcon, ShoppingCart, User2Icon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import { Button } from "@/components/ui/button";


const MyHeader = () => {
    return (
        <>
            <div className="bg-primary text-white">
                <div className="flex justify-between items-center py-4 max-w-screen-2xl mx-auto text-[12px] text-gray-400">
                    <div>Mon-Thu: <span className="font-semibold text-white hover:cursor-pointer">9:00-5:30 PM ▼</span></div>
                    <div>Visit our showroom in 1234 Street Adress City Address, 1234  <span className="font-semibold text-white underline hover:cursor-pointer">Contact Us</span></div>
                    <div className="flex gap-4 font-semibold text-white">
                        <p>Call Us:(00)1234 5678</p>
                        <Image width={20} height={20} src="/icons/fb.png" alt="" className="hover:cursor-pointer" />
                        <Image width={20} height={20} src="/icons/ig.png" alt="" className="hover:cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="bg-background">
                <header className="flex px-2 max-w-screen-2xl items-center justify-between mx-auto py-4">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="size-8 text-white lg:hidden" />
                            </SheetTrigger>
                            <SheetContent side='left'>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <ul className="flex flex-col gap-8 font-semibold">
                                    <li className="hover:cursor-pointer">Laptops</li>
                                    <li className="hover:cursor-pointer">Desktops</li>
                                    <li className="hover:cursor-pointer">Networking Devices</li>
                                    <li className="hover:cursor-pointer">Laptops</li>
                                    <li className="hover:cursor-pointer">Desktops</li>
                                    <li className="hover:cursor-pointer">Networking Devices</li>
                                    <li className="hover:cursor-pointer">Laptops</li>
                                    <li className="hover:cursor-pointer">Desktops</li>
                                    <li className="hover:cursor-pointer">Networking Devices</li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                        <img src="/images/logo/logo.png" alt="" className="w-20 hover:cursor-pointer" />
                    </div>
                    <div className="hidden lg:flex flex-1 justify-evenly">
                        <ul className="flex gap-8 font-semibold">
                            <li className="hover:cursor-pointer">Laptops</li>
                            <li className="hover:cursor-pointer">Desktops</li>
                            <li className="hover:cursor-pointer">Networking Devices</li>
                            <li className="hover:cursor-pointer">Laptops</li>
                            <li className="hover:cursor-pointer">Desktops</li>
                            <li className="hover:cursor-pointer">Networking Devices</li>
                            <li className="hover:cursor-pointer">Laptops</li>
                            <li className="hover:cursor-pointer">Desktops</li>
                            <li className="hover:cursor-pointer">Networking Devices</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <Button size='icon' variant='ghost' >
                            <Search className="hover:cursor-pointer" />
                        </Button>
                        <Button size='icon' variant='ghost' >
                            <ShoppingCart className="hover:cursor-pointer" />
                        </Button>
                        <Button size='icon' variant='ghost' >
                            <User2Icon className="hover:cursor-pointer" />
                        </Button>
                    </div>
                </header>
                <hr />
            </div>
        </>
    )
}

export default MyHeader
