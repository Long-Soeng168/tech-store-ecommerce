import React from 'react'
import { Input } from './ui/input'

const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='mx-auto max-w-screen-2xl text-white pt-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-semibold text-5xl pb-4'>Sign Up To Our Newsletter.</h1>
                        <p className='text-xl'>Be the first to hear about the latest offers.</p>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <Input type="email" placeholder="Email" className='p-4 w-96 py-6 border fill-white text-2xl' />
                        <button className='bg-blue-500 font-semibold p-4 rounded-full px-12 bg-transparent'>Subscribe</button>
                    </div>
                </div>
                <div className='py-8 flex flex-wrap gap-24'>
                    {/* start Information */}
                    <div className=''>
                        <p className='text-xl font-semibold text-gray-400'>Information</p>
                        <ul className='py-4 text-sm flex flex-col gap-1 text-gray-300'>
                            <li>About Us</li>
                            <li>About Zip</li>
                            <li>Privacy Policy</li>
                            <li>Search</li>
                            <li>Terms</li>
                            <li>Orders and Returns</li>
                            <li>Contact Us</li>
                            <li>Advanced Search</li>
                            <li>Newsletter Subscription</li>
                        </ul>
                    </div>
                    {/* end Information */}

                    {/* start PC Parts */}
                    <div className=''>
                        <p className='text-xl font-semibold text-gray-400'>PC Parts</p>
                        <ul className='py-4 text-sm flex flex-col gap-1 text-gray-300'>
                            <li>CPUS</li>
                            <li>Add On Cards</li>
                            <li>Hard Drives (Internal)</li>
                            <li>Graphic Cards</li>
                            <li>Keyboards / Mice</li>
                            <li>Cases / Power Supplies / Cooling</li>
                            <li>RAM (Memory)</li>
                            <li>Software</li>
                            <li>Speakers / Headsets</li>
                            <li>Motherboards</li>
                        </ul>
                    </div>
                    {/* end PC Parts */}

                    {/* start Desktop PCs */}
                    <div className=''>
                        <p className='text-xl font-semibold text-gray-400'>Desktop PCs</p>
                        <ul className='py-4 text-sm flex flex-col gap-1 text-gray-300'>
                            <li>Custom PCs</li>
                            <li>Servers</li>
                            <li>MSI All-In-One PCs</li>
                            <li>HP/Compaq PCs</li>
                            <li>ASUS PCs</li>
                            <li>Tecs PCs</li>
                        </ul>
                    </div>
                    {/* end Desktop PCs */}

                    {/* start Laptops */}
                    <div className=''>
                        <p className='text-xl font-semibold text-gray-400'>Laptops</p>
                        <ul className='py-4 text-sm flex flex-col gap-1 text-gray-300'>
                            <li>Evryday Use Notebooks</li>
                            <li>MSI Workstation Series</li>
                            <li>MSI Prestige Series</li>
                            <li>Tablets and Pads</li>
                            <li>Netbooks</li>
                            <li>Infinity Gaming Notebooks</li>
                        </ul>
                    </div>
                    {/* end Laptops */}


                    {/* start Address */}
                    <div className=''>
                        <p className='text-xl font-semibold text-gray-400'>Address</p>
                        <ul className='py-4 text-sm flex flex-col gap-1 text-gray-300'>
                            <li>Address: 1234 Street Adress City Address, 1234</li>
                            <li>Phones: <span className='text-blue-500'>(00) 1234 5678</span></li>
                            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                            <li>Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 11:00 AM - 5:00 PM</li>
                            <li>E-mail: <span className='text-blue-500'> shop@email.com</span></li>
                        </ul>
                    </div>
                    {/* end Address */}

                </div>
                <hr className='border border-gray-800' />
                {/* start bank */}
                <div className='py-4 flex flex-wrap justify-between items-center'>
                    <div className='flex gap-4'>
                        <img src="/icons/ig.png" alt="" width={25} className='hover:cursor-pointer' />
                        <img src="/icons/fb.png" alt="" width={25} className='hover:cursor-pointer' />
                    </div>
                    <div className='flex gap-4'>
                        <img src="/icons/banks/aba.jpg" alt="ABA" className='w-16 h-10 object-cover rounded-lg' />
                        <img src="/icons/banks/wing.jpg" alt="wing" className='w-16 h-10 object-cover rounded-lg' />
                        <img src="/icons/banks/truemoney.jpg" alt="True Money" className='w-16 h-10 object-cover rounded-lg' />
                    </div>
                    <p className='text-gray-500'>Copyright © 2020 Shop Pty. Ltd.</p>
                </div>
                {/* end bank */}
            </div>
        </div>
    )
}

export default Footer
