
"use client"
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const CreateSpeech = ({ onSubmit }) => {

    const router = useRouter()
    const {data: session}= useSession({required: true})

    const [topic, setTopic] = useState(null)
    const [type, setType] = useState(null)
    const [side, setSide] = useState(null)

    const [formSubmit, setFormSubmit] = useState(false)
    const [invalidInput, setInvalidInput] = useState(false)
    const [result, setResult] = useState("")
    async function submitForm(e){
        e.preventDefault()
        if(!topic || !side || !topic){
          setInvalidInput(true)
          return
        }
        setInvalidInput(false)
        setFormSubmit(true)
       
     
        try {
            const response = await fetch("https://www.debatr.xyz/api/newPrompt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ topic: topic, type: type, side:side }),
            });
      
            const speech = await response.text();
            // if (response.status !== 200) {
            //   throw speech.error || new Error(`Request failed with status ${response.status}`);
            // }

            const updateUser = await fetch("https://www.debatr.xyz/api/speech/newSpeech", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({speech: speech.result, username: session.user.email, topic: topic, type: type, side:side }),
              });
              console.log(updateUser);
              router.push("/home")

            // setResult(data.result);
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }
        
    }

  return (
    <div className="m-auto min-w-min max-w-lg">
    
   
      <fieldset onSubmit={submitForm}>
      <button type="submit" disabled={formSubmit} onClick={()=>router.push("/home")} className= "mx-5 mt-5 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Go Back</button>
        
        <div className="flex flex-col gap-y-5 m-5 items-center">
     
            {/* Enter Topic */}
            <div className="self-stretch">
                <legend className="text-lg  text-black font-semibold ">What is the Topic?</legend>
                <div>
                      
               <input
                   onChange={(e)=>setTopic(e.target.value)}
                   autoComplete="off"
                   type="text"
                   id="UserEmail"
                   placeholder="Ex: Schools should do away with homework altogether..."
                   disabled={formSubmit}
                   className="mt-1 p-4 w-full rounded-md text-black shadow-md sm:text-sm "
               />
               </div>

            </div>
            {/* Select Type */}
            <>
                <legend className="text-lg text-black self-stretch font-semibold ">What Type of Debate is this?</legend>
                <div className="grid self-stretch grid-cols-3 gap-4">
                  
                  {/* Button 1 */}
              <div>
                  <input
                  type="radio"
                  name="DebateType"
                  value="Fact"
                  id="Fact"
                  disabled={formSubmit}
                  className="peer/fact hidden [&:checked_+_label_svg]:block"
                  />
  
                  <label
                  onClick={(e)=>setType("Fact")}
                  for="Fact"
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/fact:border-red-500 peer-checked/fact:ring-1 peer-checked/fact:ring-red-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Fact</p>
  
                      <svg
                      className="hidden h-5 w-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                      />
                      </svg>
                  </div>
  
                  <p className="mt-1 text-gray-900">      </p>
                  </label>
              </div>
  
              {/* Button 2 */}
              <div>
                  <input
                  type="radio"
                  name="DebateType"
                  value="Opinion"
                  id="Opinion"
                  disabled={formSubmit}
                  className="peer/opinion hidden [&:checked_+_label_svg]:block"
                  />
  
                  <label
                  onClick={(e)=>setType("Opinion")}
                  for="Opinion"
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/opinion:border-red-500 peer-checked/opinion:ring-1 peer-checked/opinion:ring-red-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Opinion</p>
  
                      <svg
                      className="hidden h-5 w-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                      />
                      </svg>
                  </div>
  
                  <p className="mt-1 text-gray-900">         </p>
                  </label>
              </div>
  
              {/* Button 3 */}
              <div>
                  <input
                  type="radio"
                  name="DebateType"
                  value="Policy"
                  id="Policy"
                  disabled={formSubmit}
                  className="peer/policy hidden [&:checked_+_label_svg]:block"
                  />
  
                  <label
                  onClick={(e)=>setType("Policy")}
                  for="Policy"
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/policy:border-red-500 peer-checked/policy:ring-1 peer-checked/policy:ring-red-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Policy</p>
  
                      <svg
                      className="hidden h-5 w-5 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      >
                      <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                      />
                      </svg>
                  </div>
  
                  <p className="mt-1 text-gray-900">          </p>
                  </label>
              </div>
  
              </div>
            </>
            

            {/* Choose Side */}
            <>
                <legend className="text-lg text-black self-stretch font-semibold ">Which Side are you on?</legend>

                <div className="grid self-stretch grid-cols-2 gap-4">
                    
                    {/* Button 1 */}
                <div>
                    <input
                    type="radio"
                    name="DebateSide"
                    value="Affirmative"
                    id="Affirmative"
                    disabled={formSubmit}
                    className="peer/affirmative hidden [&:checked_+_label_svg]:block"
                    />

                    <label
                    onClick={(e)=>setSide("Affirmative")}
                    for="Affirmative"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/affirmative:border-red-500 peer-checked/affirmative:ring-1 peer-checked/affirmative:ring-red-500"
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700">Affirmative</p>

                        <svg
                        className="hidden h-5 w-5 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </div>

                    <p className="mt-1 text-gray-900">          </p>
                    </label>
                </div>

                {/* Button 2 */}
                <div>
                    <input
                    type="radio"
                    name="DebateSide"
                    value="Negation"
                    id="Negation"
                    disabled={formSubmit}
                    className="peer/negation hidden [&:checked_+_label_svg]:block"
                    />

                    <label
                    onClick={(e)=>setSide("Negation")}
                    for="Negation"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/negation:border-red-500 peer-checked/negation:ring-1 peer-checked/negation:ring-red-500"
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700">Negative</p>

                        <svg
                        className="hidden h-5 w-5 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </div>

                    <p className="mt-1 text-gray-900">             </p>
                    </label>
                </div>


                </div>
            </>
            
          

            
              
            
            
            

            {formSubmit ? 
            <div role="status" className="rounded-md bg-red-600 flex content-center px-3.5 py-2.5 mx-auto">
    <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
            </div>
            :
            <button type="submit" onClick={submitForm}  className= "rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Create</button>

            // <button type="submit"  className= "rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Create</button>
            
            
            }
         
            {invalidInput &&
           <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800" role="alert">
           <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
           <span class="sr-only">Info</span>
           <div>
             <span class="font-medium">Notice</span> Please make sure all the fields have been selected or entered
           </div>
         </div>}
        
            

        </div>


      </fieldset>
    
    </div>
  




 
   
  
  );
};

export default CreateSpeech;