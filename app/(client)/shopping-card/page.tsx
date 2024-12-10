"use client"

import * as React from "react"
import { Delete, DeleteIcon, Octagon, OctagonX, Pencil, RemoveFormatting, Trash, Trash2 } from 'lucide-react';
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const countrys = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua_and_barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina_faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo_verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central_african_republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo_democratic_republic", label: "Congo (DRC)" },
    { value: "congo_republic", label: "Congo (Republic)" },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czech_republic", label: "Czech Republic" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican_republic", label: "Dominican Republic" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "equatorial_guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "eswatini", label: "Eswatini" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea_bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall_islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new_zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north_korea", label: "North Korea" },
    { value: "north_macedonia", label: "North Macedonia" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "palestine", label: "Palestine" },
    { value: "panama", label: "Panama" },
    { value: "papua_new_guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis" },
    { value: "saint_lucia", label: "Saint Lucia" },
    { value: "saint_vincent_and_the_grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "samoa", label: "Samoa" },
    { value: "san_marino", label: "San Marino" },
    { value: "sao_tome_and_principe", label: "Sao Tome and Principe" },
    { value: "saudi_arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra_leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon_islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south_africa", label: "South Africa" },
    { value: "south_korea", label: "South Korea" },
    { value: "south_sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri_lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "taiwan", label: "Taiwan" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "timor_leste", label: "Timor-Leste" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad_and_tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united_arab_emirates", label: "United Arab Emirates" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "united_states", label: "United States" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "vatican_city", label: "Vatican City" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" },
];





type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

// Example data
const products: Product[] = [
    {
        id: 1,
        name: 'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
        image: 'https://via.placeholder.com/100',
        price: 4349.00,
        quantity: 1,
        subtotal: 13047.00,
    },
    {
        id: 2,
        name: 'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
        image: 'https://via.placeholder.com/100',
        price: 4349.00,
        quantity: 1,
        subtotal: 13047.00,
    },
    // Add more products here
];


const page = () => {

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")


    return (
        <div className="max-w-screen-xl mx-auto">
            <p>Home  ›  Shopping Card</p>
            <h1 className='text-3xl font-semibold my-8'>Shopping Cart</h1>
            <div className='flex gap-16 my-20'>
                <div className='w-11/12'>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="text-sm font-semibold text-left">
                                    <th className="border-b-2 border-gray-300 py-4">Item</th>
                                    <th className="border-b-2 border-gray-300 py-4">Price</th>
                                    <th className="border-b-2 border-gray-300 py-4 px-4">Qty</th>
                                    <th className="border-b-2 border-gray-300 py-4 px-4">Subtotal</th>
                                    <th className="border-b-2 border-gray-300 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-100">
                                        <td className="border-b-2 border-gray-300 py-4 flex items-center space-x-4">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-28 h-28 object-cover rounded-md"
                                            />
                                            <p className="w-96">{product.name}</p>
                                        </td>
                                        <td className="border-b-2 border-gray-300 py-4">${product.price.toFixed(2)}</td>
                                        <td className="border-b-2 border-gray-300 py-4 px-4 text-center">{product.quantity}</td>
                                        <td className="border-b-2 border-gray-300 py-4 px-4">${product.subtotal.toFixed(2)}</td>
                                        <td className="border-b-2 border-gray-300 py-4">
                                            <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                                <Trash2 />
                                            </button>
                                            <button className="ml-4 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                                <Pencil />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='flex justify-between'>
                            <div>
                                <Link href="#">
                                    <button
                                        className="my-8 px-8 py-1 text-gray-500 hover:bg-gray-600 hover:text-white transition border border-gray-500 rounded-full "
                                    >Continue Shopping</button>
                                </Link>
                                <Link href="#">
                                    <button
                                        className="my-8 px-8 py-1 bg-black text-white hover:bg-white hover:text-black transition border border-black rounded-full ml-4"
                                    >Clear Shopping Cart</button>
                                </Link>
                            </div>
                            <div>
                                <Link href="#">
                                    <button
                                        className="my-8 px-8 py-1 bg-black text-white hover:bg-white hover:text-black transition border border-black rounded-full "
                                    >Update Shopping Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 bg-blue-50 p-8 w-2/5 rounded-md h-1/2'>
                    <h1 className='text-2xl font-semibold '>Summary</h1>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='hover:no-underline text-sm text-gray-500 font-extrabold'>Estimate Shipping and Tax</AccordionTrigger>
                            <AccordionContent className='text-gray-400 text-xs'>
                                <p>
                                    Enter your destination to get a shipping estimate.
                                </p>
                                <div>
                                    <div className='font-semibold text-black text-sm my-2'>
                                        <p className="my-2">Country</p>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={open}
                                                    className="w-full py-2 justify-between"
                                                >
                                                    {value
                                                        ? countrys.find((country) => country.value === value)?.label
                                                        : "Select country..."}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-2">
                                                <Command>
                                                    <CommandInput placeholder="Search country..." />
                                                    <CommandList>
                                                        <CommandEmpty>No country found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {countrys.map((country) => (
                                                                <CommandItem
                                                                    key={country.value}
                                                                    value={country.value}
                                                                    onSelect={(currentValue) => {
                                                                        setValue(currentValue === value ? "" : currentValue)
                                                                        setOpen(false)
                                                                    }}
                                                                >
                                                                    {country.label}
                                                                    <Check
                                                                        className={cn(
                                                                            "ml-auto",
                                                                            value === country.value ? "opacity-100" : "opacity-0"
                                                                        )}
                                                                    />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className=' text-sm my-2'>
                                        <p className="my-2 font-semibold text-black">State/Province</p>
                                        <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                                    </div>
                                    <div className=' text-sm my-2'>
                                        <p className="my-2 font-semibold text-black">Zip/Postal Code</p>
                                        <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                                    </div>
                                    <div className=' text-sm my-2'>

                                        <p className="my-2 font-semibold text-black">Standard Rate</p>
                                        <RadioGroup defaultValue="comfortable">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="default" id="r1" />
                                                <p className="text-gray-600">
                                                    Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
                                                </p>
                                            </div>
                                        </RadioGroup>

                                        <p className="my-2 font-semibold text-black">Pickup from store</p>
                                        <RadioGroup defaultValue="comfortable">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="default" id="r1" />
                                                <p className="text-gray-600">
                                                    1234 Street Adress City Address, 1234 $0.00
                                                </p>
                                            </div>
                                        </RadioGroup>
                                    </div>

                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='hover:no-underline text-sm text-gray-500 font-extrabold'>Apply Discount Code</AccordionTrigger>
                            <AccordionContent className='text-gray-400 text-xs'>
                                <div className=' text-sm my-2'>
                                    <p className="my-2 font-semibold text-black">Enter discount code</p>
                                    <input type="text" placeholder="Enter discount code" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                                    <Link href="#">
                                        <div className="border-2 border-blue-600 text-blue-600 p-2 w-full text-center font-semibold rounded-full my-4">
                                            Apply Discount
                                        </div>
                                    </Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div>
                        <div className='font-semibold flex justify-between text-sm mb-2'>
                            <p>Subtotal</p>
                            <p>$13,047.00</p>
                        </div>
                        <div className='font-semibold flex justify-between text-sm mb-1'>
                            <p>Shipping </p>
                            <p>$21.00</p>
                        </div>
                        <p className='text-gray-400 text-[10px] w-2/3'>
                            (Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)
                        </p>
                        <div className='font-semibold flex justify-between text-sm my-2'>
                            <p>Tax</p>
                            <p>$1.91</p>
                        </div>
                        <div className='font-semibold flex justify-between text-sm mb-2'>
                            <p>GST (10%)</p>
                            <p>$1.91</p>
                        </div>
                        <div className='font-semibold flex justify-between text-sm my-2'>
                            <p>Order Total</p>
                            <p>$13,068.00</p>
                        </div>
                        <Link href="/checkout">
                            <button className='bg-blue-600 hover:bg-blue-500 text-white py-4 mt-4 mb-2 w-full rounded-full font-semibold'>
                                Proceed to Checkout
                            </button>
                        </Link>
                        <Link href="/checkout">
                            <div className='flex gap-2 justify-center items-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 py-4 my-2 w-full rounded-full font-semibold'>
                                <p>Check out with</p>
                                <div className='w-16 h-auto'>
                                    <Image
                                        src="/images/logo/paypal.png"
                                        alt=''
                                        width={100}
                                        height={10}
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href="/checkout">
                            <button className='border border-gray-500 hover:border-none hover:text-white hover:bg-gray-400 text-gray-500 py-4 my-2 w-full rounded-full font-semibold'>
                                Check Out with Multiple Addresses
                            </button>
                        </Link>
                        <div className="flex items-center my-2">
                            <img src="/images/logo/zip.png" alt="" className="w-14" />
                            <p className="text-sm">
                                <span className="font-semibold text-sm pl-1">own</span>
                                <span className="text-blue-400 px-2 text-sm">|</span>
                                it now, up to 6 months interest free
                            </p>
                            <span className="text-xs underline pl-2 hover:cursor-pointer">learn more</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
