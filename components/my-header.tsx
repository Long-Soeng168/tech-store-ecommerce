import { FormInput, Menu, Search, SearchCheckIcon, ShoppingCart, User2Icon } from "lucide-react";
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
            <nav className="bg-primary text-white px-4">
                <div className="text-sm flex justify-between items-center py-4 max-w-screen-2xl mx-auto  text-gray-400">
                    <div className="border rounded-full md:border-none px-4 py-1">Mon-Thu: <span className="font-semibold text-white hover:cursor-pointer">9:00-5:30 PM</span></div>
                    <div className="hidden lg:inline-block">
                        Visit our showroom in 1234 Street Adress City Address, 1234
                        <span className="font-semibold text-white pl-2 underline hover:cursor-pointer">
                            Contact Us
                        </span>
                    </div>
                    <div className="flex gap-4 font-semibold text-white items-center">
                        <p>Call Us:(00)1234 5678</p>
                        <Image width={35} height={35} src="/icons/fb.png" alt="" className="hidden md:block hover:cursor-pointer" />
                        <Image width={35} height={35} src="/icons/ig.png" alt="" className="hidden md:block hover:cursor-pointer" />
                    </div>
                </div>
            </nav>
            <div className="bg-blue-600 md:bg-background">
                <header className="">
                    <div className="flex px-4 md:px-2 lg:px-0 max-w-screen-2xl items-center justify-between mx-auto py-4">
                        <div className="flex items-center">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu className="size-8 text-white md:text-primary lg:hidden" />
                                </SheetTrigger>
                                <SheetContent side="left" className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
                                    <SheetHeader className="border-b pb-4 mb-4">
                                        <SheetTitle className="text-2xl font-bold text-gray-700">Menu</SheetTitle>
                                    </SheetHeader>
                                    <ul className="flex flex-col gap-6 font-semibold text-gray-600">
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Laptops</li>
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Desktops</li>
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Networking Devices</li>
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Laptops</li>
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Desktops</li>
                                        <li className="hover:cursor-pointer hover:text-blue-500 transition-colors duration-200">Networking Devices</li>
                                    </ul>
                                </SheetContent>
                            </Sheet>
                            <img src="/images/logo/wlogo.png" alt="" className="pl-8 md:hidden hover:cursor-pointer" />
                            <img src="/images/logo/bluelogo.png" alt="" className="w-20 pl-4 hover:cursor-pointer hidden md:block" />
                        </div>
                        <div className="hidden lg:flex flex-1 justify-evenly">
                            <ul className="flex gap-8 font-semibold">
                                <li className="hover:cursor-pointer">Laptops</li>
                                <li className="hover:cursor-pointer">Desktops</li>
                                <li className="hover:cursor-pointer">Networking Devices</li>
                                <li className="hover:cursor-pointer">Laptops</li>
                                <li className="hover:cursor-pointer">Desktops</li>
                                <li className="hover:cursor-pointer">Networking Devices</li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <Button size='icon' variant='ghost' className="hidden md:block " >
                                <Search className="hover:cursor-pointer" />
                            </Button>
                            <Button size='icon' variant='ghost' >
                                <ShoppingCart className="hover:cursor-pointer text-white md:text-primary" />
                            </Button>
                            <Button size='icon' variant='ghost' >
                                <User2Icon className="hover:cursor-pointer text-white md:text-primary" />
                            </Button>
                        </div>
                    </div>
                    <div className="md:hidden mx-4 mb-2">
                        <div className="relative flex items-center">
                            <span className="absolute left-3 text-gray-400">
                                <img src="/icons/search.png" alt="" />
                            </span>
                            <input type="text" placeholder="Search" className="pl-10 border rounded-full px-4 w-full py-2 text-gray-800 placeholder-gray-400" />
                        </div>

                    </div>
                </header>
                <hr />
            </div>
        </>
    )
}

export default MyHeader
