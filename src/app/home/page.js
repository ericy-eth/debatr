"use client"
// import Document from "@/components/home/document"
import Document from "@/components/home/document";
import Header from '@/components/home/header';
import 'tailwindcss/tailwind.css';
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import fetchAllSpeeches from "@/lib/fetchAllSpeeches";
import getUserSession from "@/lib/getUserSession";

import { useRouter } from "next/navigation";



// async function getUserSession(){
//   const res = await fetch("http://localhost:3000/api/auth/session", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       }
//     });
//     return res
// }
export default function Home() {
  const { push } = useRouter();

  const [userSession, setUserSession] = useState()
  const [userSpeeches, setUserSpeeches] = useState([])



  useEffect(()=>{
    getUserSession()
      .then((res)=>res.json())
      .then((session)=>{
        fetchAllSpeeches(session.user.email)
        .then((res) => res.json())
        .then((data) => {
          setUserSpeeches(data.userDocuments);
        });
      })
   

  },[])
  
    return (
      <>
       
        <Header/>
       

    

        <div className=" mx-32 px-5 rounded-md col-span-4 ">
      <div className="flex items-center gap-5 flex-wrap">
        <a onClick={()=>push('/create')}
        className=" w-56 h-72  hover:bg-gray-100 flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
        href="#"
      >
        <div className="pt-4 text-gray-500">
        <svg className="h-8 w-8 sm:h-10 sm:w-10" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9zm5-9a1.5 1.5 0 0 1 -1.5 1.5h-2v2a1.5 1.5 0 0 1 -3 0v-2h-2a1.5 1.5 0 0 1 0-3h2v-2a1.5 1.5 0 0 1 3 0v2h2a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
          <h3 className="mt-4  text-lg font-bold text-gray-900 sm:text-xl">
            Create New
          </h3>
      
          <p className="mt-2 hidden text-sm sm:block">
            Create New Debate
          </p>
        </div>
      
       
      </a>
    
    {userSpeeches.map((document, i)=>(
      <Document key={i} id={i} document={document}/>
      ))}

      
      </div>
    
    </div>
   
      </>
    )

  }

  
