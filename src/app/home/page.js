
import 'tailwindcss/tailwind.css';
import fetchAllSpeeches from '../../lib/fetchAllSpeeches';
import { getServerSession } from "next-auth/next";
import HomeClient from '../../components/home/home';
import { GET } from "../api/auth/[...nextauth]/route";
import {redirect} from "next/navigation"
export default async function Home() {
  const res = await getServerSession(GET);
  let data =  JSON.parse(JSON.stringify(res, null, 2))

  let userSpeeches = null

  if(!res){
    redirect('/signup')
  }else{
    console.log(data, " data");
    const resSpeeches = await fetchAllSpeeches(data.user.email)

    if(resSpeeches!=null){
      userSpeeches = await resSpeeches.json()
      userSpeeches = userSpeeches.userDocuments

    }
    // console.log("User speeches ", userSpeeches);

  }

    return (
      <>
        <HomeClient props={userSpeeches} session={data}></HomeClient>
    
      </>
    )

  }

  
