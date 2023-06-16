import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
export async function POST(request){
    const body = await request.json()

    const username = body.username
    let userData
    try{
        const client = await clientPromise
        const db = client.db("debatr")

        const collection = db.collection("users")

        userData = await collection.find({ documents: { $exists: true } })
        console.log("fetch request");        
    }catch(e){
        console.log(e);
    }

    if(userData){
        return NextResponse.json({userDocuments: userData.documents})

    }else{
        return NextResponse.json({userDocuments: null})

    }
}