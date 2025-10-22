'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <SessionProvider>{children}</SessionProvider>
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
        </div>    
    );
}