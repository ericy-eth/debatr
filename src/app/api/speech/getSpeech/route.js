import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
export async function POST(request){
    const body = await request.json()

    const username = body.username
    try{
        const client = await clientPromise
        const db = client.db("debatr")

        const collection = db.collection("users")

        const userDocumentsExists = await collection.find({ documents: { $exists: true } })
        if(userDocumentsExists){
            const userData = await collection.findOne({email: username})

            return NextResponse.json({userDocuments: userData.documents})
    
        }else{
            return NextResponse.json({userDocuments: null})
    
        }
        console.log("fetch request");        
    }catch(e){
        console.log(e);
    }

   
}