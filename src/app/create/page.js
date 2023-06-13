
"use client"
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const MyForm = ({ onSubmit }) => {

    const router = useRouter()
    const {data: session}= useSession({required: true})

    const [topic, setTopic] = useState(null)
    const [type, setType] = useState(null)
    const [side, setSide] = useState(null)

    const [formSubmit, setFormSubmit] = useState(false)
    
    const [result, setResult] = useState("")
    async function submitForm(e){
        e.preventDefault()
        setFormSubmit(true)
        console.log(topic, type, side);
        try {
            const response = await fetch("/api/newPrompt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ topic: topic, type: type, side:side }),
            });
      
            const speech = await response.json();
            if (response.status !== 200) {
              throw speech.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log(speech.result);

            const updateUser = await fetch("/api/speech/newSpeech", {
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
                   className="mt-1 p-4 w-full rounded-md text-black border-gray-200 shadow-sm sm:text-sm border-2 border-black"
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
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/fact:border-blue-500 peer-checked/fact:ring-1 peer-checked/fact:ring-blue-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Fact</p>
  
                      <svg
                      className="hidden h-5 w-5 text-blue-600"
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
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/opinion:border-blue-500 peer-checked/opinion:ring-1 peer-checked/opinion:ring-blue-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Opinion</p>
  
                      <svg
                      className="hidden h-5 w-5 text-blue-600"
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
                  className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/policy:border-blue-500 peer-checked/policy:ring-1 peer-checked/policy:ring-blue-500"
                  >
                  <div className="flex items-center justify-between">
                      <p className="text-gray-700">Policy</p>
  
                      <svg
                      className="hidden h-5 w-5 text-blue-600"
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
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/affirmative:border-blue-500 peer-checked/affirmative:ring-1 peer-checked/affirmative:ring-blue-500"
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700">Affirmative</p>

                        <svg
                        className="hidden h-5 w-5 text-blue-600"
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
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked/negation:border-blue-500 peer-checked/negation:ring-1 peer-checked/negation:ring-blue-500"
                    >
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700">Negative</p>

                        <svg
                        className="hidden h-5 w-5 text-blue-600"
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
            
          

            
              
            
            
            

       
            <button type="submit" onClick={submitForm} disabled={formSubmit} class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
            
        
            

        </div>


      </fieldset>
    
    </div>
  




 
   
  
  );
};

export default MyForm;