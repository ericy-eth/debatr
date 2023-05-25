'use client';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';

import Document from "./document"
export default function DocumentContainer(){
    const { push } = useRouter();

    const documents = ["test", "a", "test", "test", "test"]

    
    return(
        <div class="mx-auto px-5 rounded-md col-span-4 ">
      <div class="flex items-center gap-5 flex-wrap">
        {/* Button to create new speech */}
        <a onClick={()=>push('/create')}
        class=" w-56 h-72  flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
        href="#"
      >
        <div class="pt-4 text-gray-500">
        <svg class="h-8 w-8 sm:h-10 sm:w-10" id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9zm5-9a1.5 1.5 0 0 1 -1.5 1.5h-2v2a1.5 1.5 0 0 1 -3 0v-2h-2a1.5 1.5 0 0 1 0-3h2v-2a1.5 1.5 0 0 1 3 0v2h2a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Create New
          </h3>
      
          <p class="mt-2 hidden text-sm sm:block">
            Create New Debate
          </p>
        </div>
      
        <span
          class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
        >
          4.3
        </span>
      </a>
    
      {documents.map((document, i)=>(
      <Document title={documents[i]}/>
      ))}

      
      </div>
    
    </div>
    )
}