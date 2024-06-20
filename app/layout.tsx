
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import {Inter, Space,  Grotesk, Space_Grotesk} from 'next/font/google'
import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/Context/ThemeProvider'
const inter = Inter({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'],variable:'--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'],weight:['300','400','500','600','700'],variable:'--font-space-grotesk' })

export const metadata: Metadata = {
  title:'inquidev',
  description:'a platform to feed your programming curiousity',
icons:{
  icon:'/public/assets/images/site-logo.svg'
}

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  
    <html lang="en">
      
    
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}> 
      <ClerkProvider appearance={{
        elements:{
          formButtonPrimary:'primary-gradient',
          footerActionLink:'primary-text-gradient hover:text-primary-500' 
        }
       
       }}>
        <ThemeProvider> {children}</ThemeProvider>
          </ClerkProvider>
          </body> 
      
    </html>

  
  )
}