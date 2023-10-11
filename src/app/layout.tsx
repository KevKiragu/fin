"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProSidebarProvider } from 'react-pro-sidebar'

import Dashlayout from "@/components/dashlayout";
import TemporaryDrawer from "@/components/TemporaryDrawer";
import SideBarProvider, { SideBarContext } from "@/context/SideBarContext";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="bg-[#ededed]">
          {/* wrapp everything with my side bar */}
          <ProSidebarProvider>
            <SideBarProvider>
              <Dashlayout>
                
                <TemporaryDrawer />
                <div className='lg:mx-20 sm:mx-0'>


                  <div className='relative text-2xl capitalize rounded-md  px-4 py-2'>

                    <Breadcrumbs aria-label="breadcrumb">

                      <h2 color="text.primary mt-2">
                        {pathname === "/" ? (
                          <Link href={`/`}>
                            /Dashboard
                          </Link>
                        ) : (
                          <Link href={`${pathname}`}>
                            {pathname}
                          </Link>
                        )}

                      </h2>

                    </Breadcrumbs>
                  </div>
                  <div className='flex  justify-between items-center mt-4 px-4'>
                    <h2 className='font-bold text-2xl'>{pathname === '/'? "Main Dashboard" : pathname.split("/")[-1]}</h2>
                    <p className='capitalize text-gray- px-4'>Welcome Back</p>

                  </div>
                </div>

                {children}
              </Dashlayout>
            </SideBarProvider>
          </ProSidebarProvider>

        </section>
      </body>
    </html>
  )
}
