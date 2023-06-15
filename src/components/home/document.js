"use client"
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { red } from '@mui/material/colors';

export default function Document({document, deleteButton, id}){
  const { push } = useRouter();
  let sideTag
  let typeTag

  

  function truncateString(str, maxLen) {
    if (str.length > maxLen) {
      return str.substring(0, maxLen) + "...";
    } else {
      return str;
    }
  }
  let {topic, type, side, speech} = document

  if(side=="Affirmative"){
    sideTag = "rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  }else{
    sideTag = "rounded-full bg-red-100 px-3 py-1.5 text-xs font-medium text-red-600"
  }

  if(type=="Policy"){
    typeTag = "rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
  }else if(type=="Opinion"){
    typeTag = "rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-600"
  }else{
    typeTag = "rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-600"
  }

  if(topic.length>50){
    topic = truncateString(topic, 50)
  }
  speech = truncateString(speech, 35)

  async function deleteSpeech(){

    console.log("Speech deleted");
    try{
      await fetch("/api/speech/deleteSpeech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({topic: topic }),
      });
      redirect("localhost:3000/home")

    }catch(e){
      console.log(e);
    }
   

  }
  if(deleteButton){
    return(
      <a
        onClick={deleteSpeech}
        className=" w-56 h-72  hover:bg-gray-100 flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
        href="#"
      >
        <div className="pt-4 text-gray-500">
        <svg className='w-10 h-10 sm:h-10 sm:w-10' version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"><g><path d="M342.635,169.365c-12.493-12.501-32.754-12.507-45.255-0.014c-0.005,0.005-0.01,0.01-0.015,0.014L256,210.752   l-41.365-41.387c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.752,256l-41.387,41.365   c-12.501,12.501-12.501,32.769,0,45.269c12.501,12.501,32.769,12.501,45.269,0l0,0L256,301.248l41.365,41.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.248,256l41.387-41.365   c12.501-12.493,12.507-32.754,0.014-45.255C342.644,169.375,342.64,169.37,342.635,169.365z"/><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.847,114.678,397.322,0.153,256,0z M256,448   c-106.039,0-192-85.961-192-192S149.961,64,256,64s192,85.961,192,192C447.882,361.99,361.99,447.882,256,448z"/></g></svg>          
        <h3 className="mt-4  text-lg font-bold text-gray-900 sm:text-xl">
            Delete
          </h3>
      
        
          <p className="font-bold">
            {topic}
          </p>
        </div>
      
       
      </a>
    )
  }else{
    return(
      <a onClick={()=>push(`/home/speech/${id+1}`)}
      className="w-56 h-72 relative  hover:bg-gray-100 flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
      href="#"
    >
      
      <div className="pt-4 text-gray-500">
        <div className="flex flex-row gap-2">


        <span
          className={sideTag}
        >
          {side}
        </span>
        <span
          className={typeTag}
        >
          {type}
        </span>
   

        </div>
    
    
        <h3 className="mt-4  text-lg font-bold text-gray-900 sm:text-md">
         {topic}
        </h3>
    
        <p className="mt-2 hidden text-sm sm:block">
          {speech}
        </p>

        
      </div>

      
    
    </a>
  )
  }
  
 

}