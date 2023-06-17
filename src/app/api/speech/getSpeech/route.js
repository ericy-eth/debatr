import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
export async function POST(request){
    const body = await request.json()
    console.log("getSpeech body: ", body);

    const username = body.username
    try{
        const client = await clientPromise
        const db = client.db("debatr")

        const collection = db.collection("users")

        const userDocumentsExists = await collection.find({ documents: { $exists: true } })
        console.log("getSpeech userDocuments: ", userDocumentsExists);
        if(userDocumentsExists){
            const userData = await collection.findOne({email: username})

            return NextResponse.json({userDocuments: userData.documents})
    
        }else{
            return NextResponse.json({userDocuments: null})
    
        }
    }catch(e){
        console.log(e);
    }

   
}