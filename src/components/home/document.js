import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';

export default function Document({document, id}){
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
  
    return(
        <a onClick={()=>push(`/home/speech/${id+1}`)}
        className=" w-56 h-72  hover:bg-gray-100 flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 "
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row gap-2">
          {/* <svg
            className="h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg> */}

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