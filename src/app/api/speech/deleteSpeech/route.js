import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
import { GET } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function POST(request){
    const res = await getServerSession(GET);
    let session =  JSON.parse(JSON.stringify(res, null, 2))

    const body = await request.json()

    const topic = body.topic
    const username = session.user.email
    console.log("username ", username);
    console.log("topic ", topic);
 
    console.log("delete speech called");

    

    try{
        const client = await clientPromise
        const db = client.db("debatr")


        const collection = db.collection("users")

      

        await collection.updateOne({email:username}, {
            $pull:{
                documents:{topic: topic} 
            }
        })

     
           

        
       
    }catch(e){
        console.log(e);
    }
    return NextResponse.json(body);
}

