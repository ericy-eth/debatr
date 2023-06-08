import { useRouter } from "next/navigation"
import 'tailwindcss/tailwind.css';

import fetchAllSpeeches from "@/lib/fetchAllSpeeches";
import { getServerSession } from "next-auth/next";
import { GetServerSidePropsContext } from "next";
import Header from "@/components/home/header";
import { GET } from "@/app/api/auth/[...nextauth]/route";
import SpeechesClient from "@/components/home/speech/speech";


export default async function DocumentPage({params: {docId}}){
  const res = await getServerSession(GET);
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