import { Clock, MagnetIcon, Mail, Map, MapPin, PhoneCall, PointerIcon } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <p className='my-2'>Home  ›  Contact Us</p>
            <h1 className='text-4xl font-semibold my-8'>Contact Us</h1>
            <div className='flex gap-16'>
                <div className='w-11/12'>
                    <p className='text-sm text-gray-500 mb-8 text-wrap'>
                        We love hearing from you, our Shop customers. <br/>
                        Please contact us and we will make sure to get back to you as soon as we possibly can.
                    </p>
                    <form action="#" className='flex flex-wrap gap-4'>
                        <div className='grid grid-cols-2 gap-4 min-w-full'>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="forName" >Your Name</label>
                                <input className='border px-4 py-2 ' type="text" placeholder='Your Name' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="forEmail">Your Email</label>
                                <input className='border px-4 py-2 ' type="text" placeholder='Your Email' />
                            </div>
                            <div className='flex flex-col w-full' >
                                <label htmlFor="forPhone">Your Phone</label>
                                <input className='border px-4 py-2 ' type="text" placeholder='Your Phone' />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="thoughts" className="mb-2 text-gray-600 font-semibold">
                                What's on your mind? *
                            </label>
                            <textarea
                                id="thoughts"
                                name="thoughts"
                                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                placeholder="Share your thoughts..."
                                rows={7}
                                aria-multiline="true"
                            />
                        </div>
                        <button className='mb-24 px-8 py-2 border-2 font-semibold rounded-full text-white bg-blue-600 border-blue-600 hover:bg-white hover:text-blue-600 transition' type="submit">Submit</button>
                    </form>
                </div>
                <div className='flex flex-col gap-4 bg-blue-50 p-8 rounded-md h-1/2'>
                    <div>
                        <div className='flex gap-4 items-center text-sm font-semibold '>
                            <MapPin />
                            <h1>Address: </h1>
                        </div>
                        <p className='text-xs pl-10'>1234 Street Adress City Address, 1234</p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center text-sm font-semibold '>
                            <PhoneCall />
                            <h1>Phone: </h1>
                        </div>
                        <p className='text-xs pl-10'>(00)1234 5678</p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center text-sm font-semibold '>
                            <Clock />
                            <h1>We are open: </h1>
                        </div>
                        <p className='text-xs pl-10'>Monday - Thursday: 9:00 AM - 5:30 PM <br />
                            Friday 9:00 AM - 6:00 PM <br />
                            Saturday: 11:00 AM - 5:00 PM
                        </p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center text-sm font-semibold '>
                            <Mail />
                            <h1>E-mail: </h1>
                        </div>
                        <p className='text-xs pl-10 text-blue-600'>shop@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
