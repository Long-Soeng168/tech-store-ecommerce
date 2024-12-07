import Footer from '@/components/footer/footer';
import MyHeader from '@/components/my-header';
import MyService from '@/components/my-service';
import React from 'react'

interface ChildrenType {
    children: React.ReactNode
}

const ClientLayout: React.FC<ChildrenType> = ({ children }) => {
    return (
        <>
            <MyHeader />
            <main className=''>
                {children}
            </main>
            <MyService />
            <Footer />
        </>
    )
}

export default ClientLayout
