// import Document from "@/components/home/document"
import Document from "@/components/home/document";
// import Header from '@/components/home/header';
import 'tailwindcss/tailwind.css';
import fetchAllSpeeches from "@/lib/fetchAllSpeeches";
import { getServerSession } from "next-auth/next";
import HomeClient from "@/components/home/home";
import { GET } from "../api/auth/[...nextauth]/route";
export default async function Home() {
  const res = await getServerSession(GET);
  let data =  JSON.parse(JSON.stringify(res, null, 2))
 console.log(data);
  const resSpeeches = await fetchAllSpeeches(data.user.email)
  let userSpeeches = await resSpeeches.json()
  userSpeeches = userSpeeches.userDocuments
  console.log(userSpeeches);
    return (
      <>
        <HomeClient props={userSpeeches} session={data}></HomeClient>
    
      </>
    )

  }

  
