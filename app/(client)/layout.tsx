import Footer from '@/components/footer/footer';
import MyHeader from '@/components/my-header';
import MyService from '@/components/my-service';
import React from 'react'

const ClientLayout = (
    {
        children
    }
        :
        {
            children: React.ReactNode;
        }
) => {
    return (
        <>
            <MyHeader />
            <main className='max-w-screen-2xl mx-auto'>
                {children}
            </main>
            <MyService/>
            <Footer />
        </>
    )
}

export default ClientLayout
