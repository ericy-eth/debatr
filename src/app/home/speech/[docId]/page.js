import { useRouter } from "next/navigation"
import 'tailwindcss/tailwind.css';

import fetchAllSpeeches from "@/lib/fetchAllSpeeches";
import { getServerSession } from "next-auth/next";
import { GET } from "@/app/api/auth/[...nextauth]/route";
import SpeechesClient from "@/components/home/speech/speech";
import { redirect } from "next/navigation";

export default async function DocumentPage({params: {docId}}){
  const res = await getServerSession(GET);
  if(!res){
    redirect("/signup")
  }
  let data =  JSON.parse(JSON.stringify(res, null, 2))
  const resSpeeches = await fetchAllSpeeches(data.user.email)
  let userSpeeches = await resSpeeches.json()
  userSpeeches = userSpeeches.userDocuments

  return(
    <>
    <SpeechesClient props={userSpeeches} docId={docId}/>
    </>
  )

}