

"use client"
import { useRouter } from "next/navigation"


export default function SpeechesClient({props:userSpeeches, docId}) {
    
    const router = useRouter();
    let typeTag
    let sideTag
    let userSpeech = userSpeeches[docId-1]
  
  
  
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
        {/* <Header/> */}
          <div 
          className="flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-5 lg:p-8 "
          href="#"
        >
          <div className="pt-4 text-gray-500">
          <button type="submit"  onClick={()=>router.push("/home")} className= "mt-5 mb-5 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Go Back</button>

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
        
            <p className="mt-2 whitespace-pre-line text-md sm:block">
              {userSpeech.speech}
            </p>
          </div>
        
        </div>
        </>
       
       
        
    
      )
}