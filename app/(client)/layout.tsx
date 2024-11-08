import MyHeader from '@/components/my-header';
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
        </>
    )
}

export default ClientLayout
