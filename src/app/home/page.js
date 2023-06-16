
import 'tailwindcss/tailwind.css';
import fetchAllSpeeches from '../../lib/fetchAllSpeeches';
import { getServerSession } from "next-auth/next";
import HomeClient from '../../components/home/home';
import { GET } from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation"
export default async function Home() {
  const res = await getServerSession(GET);
  if(!res){
    redirect('/signup')
  }
  let data =  JSON.parse(JSON.stringify(res, null, 2))
  console.log(data, " data");
  const resSpeeches = await fetchAllSpeeches(data.user.email)
  let userSpeeches = await resSpeeches.json()
  userSpeeches = userSpeeches.userDocuments
    return (
      <>
        <HomeClient props={userSpeeches} session={data}></HomeClient>
    
      </>
    )

  }

  
