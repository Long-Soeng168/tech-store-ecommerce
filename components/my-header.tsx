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
                    <div>Mon-Thu: <span className="font-semibold text-white">9:00-5:30 PM ▼</span></div>
                    <div>Visit our showroom in 1234 Street Adress City Address, 1234  <span className="font-semibold text-white underline">Contact Us</span></div>
                    <div className="flex gap-4 font-semibold text-white">
                        <p>Call Us:(00)1234 5678</p>
                        <Image width={20} height={20} src="/icons/fb.png" alt="" />
                        <Image width={20} height={20} src="/icons/ig.png" alt="" />
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
                                    <li>Laptops</li>
                                    <li>Desktops</li>
                                    <li>Networking Devices</li>
                                    <li>Laptops</li>
                                    <li>Desktops</li>
                                    <li>Networking Devices</li>
                                    <li>Laptops</li>
                                    <li>Desktops</li>
                                    <li>Networking Devices</li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                        <img src="/images/logo/logo.png" alt="" className="w-20" />
                    </div>
                    <div className="hidden lg:flex flex-1 justify-evenly">
                        <ul className="flex gap-8 font-semibold">
                            <li>Laptops</li>
                            <li>Desktops</li>
                            <li>Networking Devices</li>
                            <li>Laptops</li>
                            <li>Desktops</li>
                            <li>Networking Devices</li>
                            <li>Laptops</li>
                            <li>Desktops</li>
                            <li>Networking Devices</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <Button size='icon' variant='ghost'>
                            <Search className="" />
                        </Button>
                        <Button size='icon' variant='ghost'>
                            <ShoppingCart className="" />
                        </Button>
                        <Button size='icon' variant='ghost'>
                            <User2Icon className="" />
                        </Button>
                    </div>
                </header>
                <hr />
            </div>
        </>
    )
}

export default MyHeader
