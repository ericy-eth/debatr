"use client"
import { useRouter } from "next/navigation"
import Document from "./document"
import Header from "./header"
export default function HomeClient({props: userSpeeches, session}) {
    const {push} = useRouter()
    console.log("session ", session);
    return(
        <>
       
        <Header session={session}/>
       

    

        <div className="flex flex-col px-5 rounded-md col-span-4 ">
      <div className="flex  gap-5 flex-wrap">
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