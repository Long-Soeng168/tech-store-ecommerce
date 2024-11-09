import React from 'react'
import { Input } from '../ui/input'


import AccordionComponent from '../footer/my-footer-accordion';
import AccordionAdreesComponent from '../footer/my-footer-address-accordion';


const information = [
    {
        title: 'Information',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'About Zip', href: '/about-zip' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Search', href: '/search' },
            { label: 'Terms', href: '/terms' },
            { label: 'Orders and Returns', href: '/orders-returns' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Advanced Search', href: '/advanced-search' },
            { label: 'Newsletter Subscription', href: '/newsletter' }
        ]
    }
];

const pc_parts = [
    {
        title: 'PC Parts',
        links: [
            { label: 'CPUs', href: '/pc-parts/cpus' },
            { label: 'Add On Cards', href: '/pc-parts/add-on-cards' },
            { label: 'Hard Drives (Internal)', href: '/pc-parts/hard-drives' },
            { label: 'Graphic Cards', href: '/pc-parts/graphic-cards' },
            { label: 'Keyboards / Mice', href: '/pc-parts/keyboards-mice' },
            { label: 'Cases / Power Supplies / Cooling', href: '/pc-parts/cases' },
            { label: 'RAM (Memory)', href: '/pc-parts/ram' },
            { label: 'Software', href: '/pc-parts/software' },
            { label: 'Speakers / Headsets', href: '/pc-parts/speakers-headsets' },
            { label: 'Motherboards', href: '/pc-parts/motherboards' }
        ]
    }
];


const desktopPCs = [
    {
        title: 'Desktop PCs',
        links: [
            { label: 'Custom PCs', href: '/desktop-pcs/custom' },
            { label: 'Servers', href: '/desktop-pcs/servers' },
            { label: 'MSI All-In-One PCs', href: '/desktop-pcs/msi-all-in-one' },
            { label: 'HP/Compaq PCs', href: '/desktop-pcs/hp-compaq' },
            { label: 'ASUS PCs', href: '/desktop-pcs/asus' },
            { label: 'Tecs PCs', href: '/desktop-pcs/tecs' }
        ]
    }
];

const laptops = [
    {
        title: 'Laptops',
        links: [
            { label: 'Everyday Use Notebooks', href: '/laptops/everyday-use' },
            { label: 'MSI Workstation Series', href: '/laptops/msi-workstation' },
            { label: 'MSI Prestige Series', href: '/laptops/msi-prestige' },
            { label: 'Tablets and Pads', href: '/laptops/tablets-pads' },
            { label: 'Netbooks', href: '/laptops/netbooks' },
            { label: 'Infinity Gaming Notebooks', href: '/laptops/infinity-gaming' }
        ]
    }
];

const addressData = [
    {
        title: 'Current Address',
        details: [
            { label: 'Address', content: '1234 Street Address City Address, 1234' },
            { label: 'Phones', content: <a href="tel:+0012345678" className='text-blue-500'>(00) 1234 5678</a> },
            { label: 'We are open', content: 'Monday-Thursday: 9:00 AM - 5:30 PM' },
            { label: 'Friday', content: '9:00 AM - 6:00 PM' },
            { label: 'Saturday', content: '11:00 AM - 5:00 PM' },
            { label: 'E-mail', content: <a href="mailto:shop@email.com" className='text-blue-500'>shop@email.com</a> },
            { label: 'Website', content: <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>www.example.com</a> },
            {
                label: 'Social Media', content: (
                    <>
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className='mr-2 text-blue-500'>Facebook</a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className='mr-2 text-blue-500'>Twitter</a>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Instagram</a>
                    </>
                )
            }
        ]
    },
    {
        title: 'Past Address 1',
        details: [
            { label: 'Address', content: '5678 Old Street Address, Old City, 5678' },
            { label: 'Phones', content: <a href="tel:+0098765432" className='text-blue-500'>(00) 9876 5432</a> },
            { label: 'Previous Email', content: <a href="mailto:oldshop@email.com" className='text-blue-500'>oldshop@email.com</a> },
            { label: 'Previous Website', content: <a href="https://www.oldwebsite.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>www.oldwebsite.com</a> },
            { label: 'We used to be open', content: 'Monday-Friday: 9:00 AM - 5:00 PM' }
        ]
    },
    {
        title: 'Past Address 2',
        details: [
            { label: 'Address', content: '9876 Another Street, Another City, 9876' },
            { label: 'Phones', content: <a href="tel:+0011223344" className='text-blue-500'>(00) 1122 3344</a> },
            { label: 'Previous Email', content: <a href="mailto:anotherstore@email.com" className='text-blue-500'>anotherstore@email.com</a> },
            { label: 'Previous Website', content: <a href="https://www.anotherwebsite.com" target="_blank" rel="noopener noreferrer" className='text-blue-500'>www.anotherwebsite.com</a> },
            { label: 'We used to be open', content: 'Monday-Saturday: 10:00 AM - 6:00 PM' }
        ]
    }
];


const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='mx-auto max-w-screen-2xl text-white pt-8 md:pt-16 px-8 md:px-0'>
                <div className='md:flex md:justify-between md:items-center'>
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-center font-semibold text-xl md:text-2xl lg:text-5xl pb-2 Md:pb-4'>Sign Up To Our Newsletter.</h1>
                        <p className='text-gray-300 text-sm md:text-xl lg:text-start'>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className='flex gap-4 mt-6 items-center'>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full sm:w-80 lg:w-96  p-2 py-2 sm:py-5 md:py-4 border text-lg sm:text-xl md:text-xl border-white"
                        />

                        <button className="bg-blue-500 font-semibold p-2 sm:p-3 md:p-2 lg:p-4 rounded-full px-6 sm:px-10 md:px-8 lg:px-16 text-sm sm:text-base md:text-xl ">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className='py-8 md:flex md:flex-wrap md:gap-24'>

                    <div className='md:hidden'>
                        <AccordionComponent data={information} />
                    </div>
                    <div className='hidden md:block'>
                        <div>
                            {information.map((section, index) => (
                                <div key={index}>
                                    <p className="text-xl font-semibold text-gray-400">{section.title}</p>
                                    <ul className="py-4 text-sm flex flex-col gap-1 text-gray-300">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href} className="hover:text-gray-500">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='mb-4 mt-2 border-gray-800 md:hidden' />
                    <div className='md:hidden'>
                        <AccordionComponent data={pc_parts} />
                    </div>
                    <div className='hidden md:block'>
                        <div>
                            {pc_parts.map((section, index) => (
                                <div key={index}>
                                    <p className="text-xl font-semibold text-gray-400">{section.title}</p>
                                    <ul className="py-4 text-sm flex flex-col gap-1 text-gray-300">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href} className="hover:text-gray-500">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='my-4 mt-2 border-gray-800 md:hidden' />
                    <div className='md:hidden'>
                        <AccordionComponent data={desktopPCs} />
                    </div>
                    <div className='hidden md:block'>
                        <div>
                            {desktopPCs.map((section, index) => (
                                <div key={index}>
                                    <p className="text-xl font-semibold text-gray-400">{section.title}</p>
                                    <ul className="py-4 text-sm flex flex-col gap-1 text-gray-300">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href} className="hover:text-gray-500">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='my-4 mt-2 border-gray-800 md:hidden' />
                    <div className='md:hidden'>
                        <AccordionComponent data={laptops} />
                    </div>
                    <div className='hidden md:block'>
                        <div>
                            {laptops.map((section, index) => (
                                <div key={index}>
                                    <p className="text-xl font-semibold text-gray-400">{section.title}</p>
                                    <ul className="py-4 text-sm flex flex-col gap-1 text-gray-300">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href} className="hover:text-gray-500">
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='my-4 mt-2 border-gray-800 md:hidden' />
                    <div className='md:hidden'>
                        <AccordionAdreesComponent data={addressData} />
                    </div>
                    <div className='hidden md:block'>
                        <div>
                            {addressData.map((address, index) => (
                                <div key={index} className="mb-6">
                                    <p className="text-xl font-semibold text-gray-400">{address.title}</p>
                                    <ul className="py-4 text-sm flex flex-col gap-1 text-gray-300">
                                        {address.details.map((detail, idx) => (
                                            <li key={idx} className="flex">
                                                <span className="font-semibold mr-2">{detail.label}:</span>
                                                <span>{detail.content}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className='my-4 mt-2 border-gray-800 md:hidden' />

                </div>
                <hr className='border border-gray-800' />
                {/* start bank */}
                <div className='py-4'>
                    <div className='py-4 flex flex-wrap justify-between items-center'>
                        <div className='flex gap-4'>
                            <img src="/icons/ig.png" alt="" width={25} className='hover:cursor-pointer' />
                            <img src="/icons/fb.png" alt="" width={25} className='hover:cursor-pointer' />
                        </div>
                        <div className='hidden md:flex gap-4 '>
                            <img src="/icons/banks/aba.jpg" alt="ABA" className='w-16 h-10 object-cover rounded-lg' />
                            <img src="/icons/banks/wing.jpg" alt="wing" className='w-16 h-10 object-cover rounded-lg' />
                            <img src="/icons/banks/truemoney.jpg" alt="True Money" className='w-16 h-10 object-cover rounded-lg' />
                        </div>
                        <p className='text-sm md:text-xl text-gray-500'>Copyright © 2020 Shop Pty. Ltd.</p>
                    </div>
                    <div className='md:hidden flex gap-4 justify-center mb-4'>
                        <img src="/icons/banks/aba.jpg" alt="ABA" className='w-10 h-6 md:w-16 md:h-10 object-cover rounded-sm md:rounded-lg' />
                        <img src="/icons/banks/wing.jpg" alt="wing" className='w-10 h-6 md:w-16 md:h-10 object-cover rounded-sm md:rounded-lg' />
                        <img src="/icons/banks/truemoney.jpg" alt="True Money" className='w-10 h-6 md:w-16 md:h-10 object-cover rounded-sm md:rounded-lg' />
                    </div>
                </div>
                {/* end bank */}
            </div>
        </div>
    )
}

export default Footer
