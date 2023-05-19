'use client';
import { useRouter } from 'next/navigation';

import Document from "./document"
export default function DocumentContainer(){
    const { push } = useRouter();

    const documents = ["test", "a", "test", "test", "test"]

    
    return(
        <div class="mx-auto px-5 border-2 border-black rounded-md ">
      <h1 class="text-xl py-5 font-bold">Document Creator</h1>
      <div class=" flex gap-5 flex-wrap">
        {/* Button to create new speech */}
      <div onClick={()=>push('/create')} class="flex flex-none h-72 w-60 border-2 border-black rounded-md">
       
        <div class="flex flex-col justify-center mx-auto my-auto">
          <div class="mx-auto">Create New</div>
          <div class="text-red-700 text-7xl mx-auto">+</div>
        </div>
      </div>
      {documents.map((document, i)=>(
      <Document title={documents[i]}/>
      ))}

      
      </div>
    
    </div>
    )
}