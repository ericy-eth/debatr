// import Document from "@/components/home/document"
"use client"

import DocumentContainer from "@/components/home/documentContainer"
import Header from '@/components/home/header';
import 'tailwindcss/tailwind.css';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Home() {
  const {data: session} = useSession({
    required: true
  })
  
  return (
    <>
     
      <Header/>
      <DocumentContainer/>
    </>
      
  
   


  )
}