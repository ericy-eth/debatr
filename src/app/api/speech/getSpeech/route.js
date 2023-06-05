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

        userData = await collection.findOne({email: username})
        console.log("fetch request");        
    }catch(e){
        console.log(e);
    }
    return NextResponse.json({userDocuments: userData.documents})
}