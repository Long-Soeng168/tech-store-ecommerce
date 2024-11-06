import { Menu, ShoppingCart, User2Icon } from "lucide-react";
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
        <div className="bg-primary ">
            <header className="flex px-2 max-w-screen-2xl items-center justify-between mx-auto">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="size-8 text-white" />
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col gap-8">
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
                <div className="hidden lg:flex flex-1">
                    <ul className="flex gap-8 text-white">
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
                        <ShoppingCart className="text-white" />
                    </Button>
                    <Button size='icon' variant='ghost'>
                        <User2Icon className="text-white" />
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default MyHeader
