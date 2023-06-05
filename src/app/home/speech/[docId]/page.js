"use client"
import { useRouter } from "next/navigation"
import fetchAllSpeeches from "@/lib/fetchAllSpeeches"
import 'tailwindcss/tailwind.css';
import getUserSession from "@/lib/getUserSession";
import { useEffect, useState } from "react";
import Header from "@/components/home/header";

export default function DocumentPage({params: {docId}}){
  const router = useRouter();
  let typeTag
  let sideTag
  const [userSpeech, setUserSpeech] = useState({topic: "", type: "", side: "", speech: ""})
  

  useEffect(()=>{
    getUserSession()
      .then((res)=>res.json())
      .then((session)=>{
        fetchAllSpeeches(session.user.email)
        .then((res) => res.json())
        .then((data) => {
          const userData = data.userDocuments[docId-1]
          // console.log("data ", data.userDocuments[docId]);
          console.log(userData);
          setUserSpeech(userData);
        });
      })
    },[])


  // function truncateString(str, maxLen) {
  //   if (str.length > maxLen) {
  //     return str.substring(0, maxLen) + "...";
  //   } else {
  //     return str;
  //   }
  // }

  // if(topic.length>50){
  //   topic = truncateString(topic, 50)
  // }
  // speech = truncateString(speech, 35)
  if(userSpeech.side=="Affirmative"){
    sideTag = "rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  }else{
    sideTag = "rounded-full bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600"
  }

  if(userSpeech.type=="Policy"){
    typeTag = "rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
  }else if(userSpeech.type=="Opinion"){
    typeTag = "rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-600"
  }else{
    typeTag = "rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-600"
  }
    return(
      <>
      <Header/>
        <div 
        className="mx-32 flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row gap-2">

          <span
            className={sideTag}
          >
            {userSpeech.side}
          </span>
          <span
            className={typeTag}
          >
            {userSpeech.type}
          </span>

          </div>
      
      
          <h3 className="mt-4  text-lg font-bold text-gray-900 sm:text-md">
           {userSpeech.topic}
          </h3>
      
          <p className="mt-2 whitespace-pre-line text-md hidden sm:block">
            {userSpeech.speech}
          </p>
        </div>
      
      </div>
      </>
     
     
      
  
    )

}