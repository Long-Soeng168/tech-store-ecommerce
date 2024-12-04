"use client"

import Link from 'next/link'
import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
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
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
};


const countries = [
    { valueCountry: "afghanistan", label: "Afghanistan" },
    { valueCountry: "albania", label: "Albania" },
    { valueCountry: "algeria", label: "Algeria" },
    { valueCountry: "andorra", label: "Andorra" },
    { valueCountry: "angola", label: "Angola" },
    { valueCountry: "antigua_and_barbuda", label: "Antigua and Barbuda" },
    { valueCountry: "argentina", label: "Argentina" },
    { valueCountry: "armenia", label: "Armenia" },
    { valueCountry: "australia", label: "Australia" },
    { valueCountry: "austria", label: "Austria" },
    { valueCountry: "azerbaijan", label: "Azerbaijan" },
    { valueCountry: "bahamas", label: "Bahamas" },
    { valueCountry: "bahrain", label: "Bahrain" },
    { valueCountry: "bangladesh", label: "Bangladesh" },
    { valueCountry: "barbados", label: "Barbados" },
    { valueCountry: "belarus", label: "Belarus" },
    { valueCountry: "belgium", label: "Belgium" },
    { valueCountry: "belize", label: "Belize" },
    { valueCountry: "benin", label: "Benin" },
    { valueCountry: "bhutan", label: "Bhutan" },
    { valueCountry: "bolivia", label: "Bolivia" },
    { valueCountry: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina" },
    { valueCountry: "botswana", label: "Botswana" },
    { valueCountry: "brazil", label: "Brazil" },
    { valueCountry: "brunei", label: "Brunei" },
    { valueCountry: "bulgaria", label: "Bulgaria" },
    { valueCountry: "burkina_faso", label: "Burkina Faso" },
    { valueCountry: "burundi", label: "Burundi" },
    { valueCountry: "cabo_verde", label: "Cabo Verde" },
    { valueCountry: "cambodia", label: "Cambodia" },
    { valueCountry: "cameroon", label: "Cameroon" },
    { valueCountry: "canada", label: "Canada" },
    { valueCountry: "central_african_republic", label: "Central African Republic" },
    { valueCountry: "chad", label: "Chad" },
    { valueCountry: "chile", label: "Chile" },
    { valueCountry: "china", label: "China" },
    { valueCountry: "colombia", label: "Colombia" },
    { valueCountry: "comoros", label: "Comoros" },
    { valueCountry: "congo_democratic_republic", label: "Congo (DRC)" },
    { valueCountry: "congo_republic", label: "Congo (Republic)" },
    { valueCountry: "costa_rica", label: "Costa Rica" },
    { valueCountry: "croatia", label: "Croatia" },
    { valueCountry: "cuba", label: "Cuba" },
    { valueCountry: "cyprus", label: "Cyprus" },
    { valueCountry: "czech_republic", label: "Czech Republic" },
    { valueCountry: "denmark", label: "Denmark" },
    { valueCountry: "djibouti", label: "Djibouti" },
    { valueCountry: "dominica", label: "Dominica" },
    { valueCountry: "dominican_republic", label: "Dominican Republic" },
    { valueCountry: "ecuador", label: "Ecuador" },
    { valueCountry: "egypt", label: "Egypt" },
    { valueCountry: "el_salvador", label: "El Salvador" },
    { valueCountry: "equatorial_guinea", label: "Equatorial Guinea" },
    { valueCountry: "eritrea", label: "Eritrea" },
    { valueCountry: "estonia", label: "Estonia" },
    { valueCountry: "eswatini", label: "Eswatini" },
    { valueCountry: "ethiopia", label: "Ethiopia" },
    { valueCountry: "fiji", label: "Fiji" },
    { valueCountry: "finland", label: "Finland" },
    { valueCountry: "france", label: "France" },
    { valueCountry: "gabon", label: "Gabon" },
    { valueCountry: "gambia", label: "Gambia" },
    { valueCountry: "georgia", label: "Georgia" },
    { valueCountry: "germany", label: "Germany" },
    { valueCountry: "ghana", label: "Ghana" },
    { valueCountry: "greece", label: "Greece" },
    { valueCountry: "grenada", label: "Grenada" },
    { valueCountry: "guatemala", label: "Guatemala" },
    { valueCountry: "guinea", label: "Guinea" },
    { valueCountry: "guinea_bissau", label: "Guinea-Bissau" },
    { valueCountry: "guyana", label: "Guyana" },
    { valueCountry: "haiti", label: "Haiti" },
    { valueCountry: "honduras", label: "Honduras" },
    { valueCountry: "hungary", label: "Hungary" },
    { valueCountry: "iceland", label: "Iceland" },
    { valueCountry: "india", label: "India" },
    { valueCountry: "indonesia", label: "Indonesia" },
    { valueCountry: "iran", label: "Iran" },
    { valueCountry: "iraq", label: "Iraq" },
    { valueCountry: "ireland", label: "Ireland" },
    { valueCountry: "israel", label: "Israel" },
    { valueCountry: "italy", label: "Italy" },
    { valueCountry: "jamaica", label: "Jamaica" },
    { valueCountry: "japan", label: "Japan" },
    { valueCountry: "jordan", label: "Jordan" },
    { valueCountry: "kazakhstan", label: "Kazakhstan" },
    { valueCountry: "kenya", label: "Kenya" },
    { valueCountry: "kiribati", label: "Kiribati" },
    { valueCountry: "kosovo", label: "Kosovo" },
    { valueCountry: "kuwait", label: "Kuwait" },
    { valueCountry: "kyrgyzstan", label: "Kyrgyzstan" },
    { valueCountry: "laos", label: "Laos" },
    { valueCountry: "latvia", label: "Latvia" },
    { valueCountry: "lebanon", label: "Lebanon" },
    { valueCountry: "lesotho", label: "Lesotho" },
    { valueCountry: "liberia", label: "Liberia" },
    { valueCountry: "libya", label: "Libya" },
    { valueCountry: "liechtenstein", label: "Liechtenstein" },
    { valueCountry: "lithuania", label: "Lithuania" },
    { valueCountry: "luxembourg", label: "Luxembourg" },
    { valueCountry: "madagascar", label: "Madagascar" },
    { valueCountry: "malawi", label: "Malawi" },
    { valueCountry: "malaysia", label: "Malaysia" },
    { valueCountry: "maldives", label: "Maldives" },
    { valueCountry: "mali", label: "Mali" },
    { valueCountry: "malta", label: "Malta" },
    { valueCountry: "marshall_islands", label: "Marshall Islands" },
    { valueCountry: "mauritania", label: "Mauritania" },
    { valueCountry: "mauritius", label: "Mauritius" },
    { valueCountry: "mexico", label: "Mexico" },
    { valueCountry: "micronesia", label: "Micronesia" },
    { valueCountry: "moldova", label: "Moldova" },
    { valueCountry: "monaco", label: "Monaco" },
    { valueCountry: "mongolia", label: "Mongolia" },
    { valueCountry: "montenegro", label: "Montenegro" },
    { valueCountry: "morocco", label: "Morocco" },
    { valueCountry: "mozambique", label: "Mozambique" },
    { valueCountry: "myanmar", label: "Myanmar" },
    { valueCountry: "namibia", label: "Namibia" },
    { valueCountry: "nauru", label: "Nauru" },
    { valueCountry: "nepal", label: "Nepal" },
    { valueCountry: "netherlands", label: "Netherlands" },
    { valueCountry: "new_zealand", label: "New Zealand" },
    { valueCountry: "nicaragua", label: "Nicaragua" },
    { valueCountry: "niger", label: "Niger" },
    { valueCountry: "nigeria", label: "Nigeria" },
    { valueCountry: "north_korea", label: "North Korea" },
    { valueCountry: "north_macedonia", label: "North Macedonia" },
    { valueCountry: "norway", label: "Norway" },
    { valueCountry: "oman", label: "Oman" },
    { valueCountry: "pakistan", label: "Pakistan" },
    { valueCountry: "palau", label: "Palau" },
    { valueCountry: "palestine", label: "Palestine" },
    { valueCountry: "panama", label: "Panama" },
    { valueCountry: "papua_new_guinea", label: "Papua New Guinea" },
    { valueCountry: "paraguay", label: "Paraguay" },
    { valueCountry: "peru", label: "Peru" },
    { valueCountry: "philippines", label: "Philippines" },
    { valueCountry: "poland", label: "Poland" },
    { valueCountry: "portugal", label: "Portugal" },
    { valueCountry: "qatar", label: "Qatar" },
    { valueCountry: "romania", label: "Romania" },
    { valueCountry: "russia", label: "Russia" },
    { valueCountry: "rwanda", label: "Rwanda" },
    { valueCountry: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis" },
    { valueCountry: "saint_lucia", label: "Saint Lucia" },
    { valueCountry: "saint_vincent_and_the_grenadines", label: "Saint Vincent and the Grenadines" },
    { valueCountry: "samoa", label: "Samoa" },
    { valueCountry: "san_marino", label: "San Marino" },
    { valueCountry: "sao_tome_and_principe", label: "Sao Tome and Principe" },
    { valueCountry: "saudi_arabia", label: "Saudi Arabia" },
    { valueCountry: "senegal", label: "Senegal" },
    { valueCountry: "serbia", label: "Serbia" },
    { valueCountry: "seychelles", label: "Seychelles" },
    { valueCountry: "sierra_leone", label: "Sierra Leone" },
    { valueCountry: "singapore", label: "Singapore" },
    { valueCountry: "slovakia", label: "Slovakia" },
    { valueCountry: "slovenia", label: "Slovenia" },
    { valueCountry: "solomon_islands", label: "Solomon Islands" },
    { valueCountry: "somalia", label: "Somalia" },
    { valueCountry: "south_africa", label: "South Africa" },
    { valueCountry: "south_korea", label: "South Korea" },
    { valueCountry: "south_sudan", label: "South Sudan" },
    { valueCountry: "spain", label: "Spain" },
    { valueCountry: "sri_lanka", label: "Sri Lanka" },
    { valueCountry: "sudan", label: "Sudan" },
    { valueCountry: "suriname", label: "Suriname" },
    { valueCountry: "sweden", label: "Sweden" },
    { valueCountry: "switzerland", label: "Switzerland" },
    { valueCountry: "syria", label: "Syria" },
    { valueCountry: "taiwan", label: "Taiwan" },
    { valueCountry: "tajikistan", label: "Tajikistan" },
    { valueCountry: "tanzania", label: "Tanzania" },
    { valueCountry: "thailand", label: "Thailand" },
    { valueCountry: "timor_leste", label: "Timor-Leste" },
    { valueCountry: "togo", label: "Togo" },
    { valueCountry: "tonga", label: "Tonga" },
    { valueCountry: "trinidad_and_tobago", label: "Trinidad and Tobago" },
    { valueCountry: "tunisia", label: "Tunisia" },
    { valueCountry: "turkey", label: "Turkey" },
    { valueCountry: "turkmenistan", label: "Turkmenistan" },
    { valueCountry: "tuvalu", label: "Tuvalu" },
    { valueCountry: "uganda", label: "Uganda" },
    { valueCountry: "ukraine", label: "Ukraine" },
    { valueCountry: "united_arab_emirates", label: "United Arab Emirates" },
    { valueCountry: "united_kingdom", label: "United Kingdom" },
    { valueCountry: "united_states", label: "United States" },
    { valueCountry: "uruguay", label: "Uruguay" },
    { valueCountry: "uzbekistan", label: "Uzbekistan" },
    { valueCountry: "vanuatu", label: "Vanuatu" },
    { valueCountry: "vatican_city", label: "Vatican City" },
    { valueCountry: "venezuela", label: "Venezuela" },
    { valueCountry: "vietnam", label: "Vietnam" },
    { valueCountry: "yemen", label: "Yemen" },
    { valueCountry: "zambia", label: "Zambia" },
    { valueCountry: "zimbabwe", label: "Zimbabwe" },
];

const provinces = [
    { valueProvince: "banteay_meanchey", label: "Banteay Meanchey" },
    { valueProvince: "battambang", label: "Battambang" },
    { valueProvince: "kampong_cham", label: "Kampong Cham" },
    { valueProvince: "kampong_chhnang", label: "Kampong Chhnang" },
    { valueProvince: "kampong_speu", label: "Kampong Speu" },
    { valueProvince: "kampong_thom", label: "Kampong Thom" },
    { valueProvince: "kampot", label: "Kampot" },
    { valueProvince: "kandal", label: "Kandal" },
    { valueProvince: "koh_kong", label: "Koh Kong" },
    { valueProvince: "kratie", label: "Kratie" },
    { valueProvince: "mondulkiri", label: "Mondulkiri" },
    { valueProvince: "oddar_meanchey", label: "Oddar Meanchey" },
    { valueProvince: "pailin", label: "Pailin" },
    { valueProvince: "phnom_penh", label: "Phnom Penh" },
    { valueProvince: "preah_vihear", label: "Preah Vihear" },
    { valueProvince: "prey_veng", label: "Prey Veng" },
    { valueProvince: "pursat", label: "Pursat" },
    { valueProvince: "ratanakiri", label: "Ratanakiri" },
    { valueProvince: "siem_reap", label: "Siem Reap" },
    { valueProvince: "preah_sihanouk", label: "Preah Sihanouk" },
    { valueProvince: "stung_treng", label: "Stung Treng" },
    { valueProvince: "svay_rieng", label: "Svay Rieng" },
    { valueProvince: "takeo", label: "Takeo" },
    { valueProvince: "tbong_khmum", label: "Tbong Khmum" },
];



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

    const [openProvince, setOpenProvince] = React.useState(false)
    const [valueProvince, setValueProvince] = React.useState("")
    const [openCountry, setOpenCountry] = React.useState(false)
    const [valueCountry, setValueCountry] = React.useState("")

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <p>Home  ›  Shopping Cart  ›  Checkout Process</p>
            <div className='flex gap-8 my-20'>
                <div className='w-11/12'>
                    <div className='flex gap-16 items-center mb-8'>
                        <h1 className='text-3xl font-semibold'>Checkout</h1>
                        <Link href="/login">
                            <button className='text-sm font-extrabold py-2 px-16 rounded-full border-4 text-blue-600 border-blue-600'>
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <h1 className='text-xl font-semibold my-2'>Shipping Address</h1>
                    <hr className='mb-4' />
                    <div className='w-2/3'>
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Email Address <span className='text-red-500'>*</span></p>
                            <input type="email" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <p className='mt-8 text-sm text-gray-400'>You can create an account after checkout.</p>
                        <hr className='my-4' />
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">First Name <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Last Name <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Company <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Street Address <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 mb-2 text-gray-800" />
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">City <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                        <div className=' text-sm my-2'>
                            <p className="my-2 font-semibold text-black">State/Province <span className='text-red-500'>*</span></p>
                            {/* <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" /> */}
                            <Popover open={openProvince} onOpenChange={setOpenProvince}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openProvince}
                                        className="w-full py-2 justify-between"
                                    >
                                        {valueProvince
                                            ? provinces.find((province) => province.valueProvince === valueProvince)?.label
                                            : "Select State/Province..."}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-2">
                                    <Command>
                                        <CommandInput placeholder="Search province..." />
                                        <CommandList>
                                            <CommandEmpty>No province found.</CommandEmpty>
                                            <CommandGroup>
                                                {provinces.map((province) => (
                                                    <CommandItem
                                                        key={province.valueProvince}
                                                        value={province.valueProvince}
                                                        onSelect={(currentValue) => {
                                                            setValueProvince(currentValue === valueProvince ? "" : currentValue)
                                                            setOpenProvince(false)
                                                        }}
                                                    >
                                                        {province.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                valueProvince === province.valueProvince ? "opacity-100" : "opacity-0"
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


                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Zip/Postal Code <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>

                        <div className='font-semibold text-black text-sm my-2'>
                            <p className="my-2 font-semibold text-black">Country <span className='text-red-500'>*</span></p>

                            <Popover open={openCountry} onOpenChange={setOpenCountry}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openProvince}
                                        className="w-full py-2 justify-between"
                                    >
                                        {valueCountry
                                            ? countries.find((country) => country.valueCountry === valueCountry)?.label
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
                                                {countries.map((country) => (
                                                    <CommandItem
                                                        key={country.valueCountry}
                                                        value={country.valueCountry}
                                                        onSelect={(currentValue) => {
                                                            setValueCountry(currentValue === valueCountry ? "" : currentValue)
                                                            setOpenCountry(false)
                                                        }}
                                                    >
                                                        {country.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                valueCountry === country.valueCountry ? "opacity-100" : "opacity-0"
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

                        <div className=' text-sm mb-2'>
                            <p className="my-2 font-semibold text-black">Phone Number <span className='text-red-500'>*</span></p>
                            <input type="text" className="border py-2 w-full rounded-md pl-4 text-gray-800" />
                        </div>
                    </div>

                    <hr className='my-4' />

                    <div className=' text-sm my-2'>

                        <p className="my-2 font-semibold text-black">Standard Rate</p>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <div className='flex justify-between items-center w-2/3 '>
                                    <p className="text-gray-600">
                                        Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
                                    </p>
                                    <p className="text-gray-900 font-semibold">
                                        $21.00
                                    </p>
                                </div>
                            </div>
                        </RadioGroup>

                        <p className="my-2 font-semibold text-black">Pickup from store</p>
                        <RadioGroup defaultValue="comfortable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" />
                                <div className='flex justify-between items-center w-2/3'>
                                    <p className="text-gray-600">
                                        1234 Street Adress City Address, 1234 $0.00
                                    </p>
                                    <p className="text-gray-900 font-semibold">
                                        $0.00
                                    </p>
                                </div>
                            </div>
                        </RadioGroup>
                        <Link href="#">
                            <button className='bg-blue-600 text-white py-2 px-16 rounded-full my-8'>Next</button>
                        </Link>
                    </div>
                </div>

                {/* start Order Summary */}
                <div className='flex flex-col gap-4  w-2/5 rounded-md h-1/2'>
                    <div className='bg-blue-50 p-8 rounded-sm'>
                        <h1 className='text-2xl font-semibold'>Order Summary</h1>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='hover:no-underline'>2 Items in Cart</AccordionTrigger>
                                <AccordionContent>
                                    {products.map((product) => (
                                        <div key={product.id} className="hover:bg-gray-100 flex mb-4">
                                            <div className="min-w-24 flex items-center space-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-24 h-24 object-cover rounded-sm"
                                                />
                                            </div>
                                            <div className='px-4'>
                                                <p className="text-sm truncate-multiline">{product.name}</p>
                                                <div className='flex'>
                                                    <p className="font-semibold text-gray-400 py-2 text-center">Qty {product.quantity}</p>
                                                    <p className="pl-4 py-2 font-extrabold text-sm">${product.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                {/* end Order Summary */}
            </div>
        </div>
    )
}

export default page
