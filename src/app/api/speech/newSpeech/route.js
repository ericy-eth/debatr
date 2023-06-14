import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
export async function POST(request){

    const body = await request.json()

    const topic = body.topic
    const type = body.type
    const side = body.side
    const speech = body.speech

    const username = body.username

    const document = {
        topic: topic,
        type: type,
        side: side,
        speech: speech
        
    }

    try{
        const client = await clientPromise
        const db = client.db("debatr")


        const collection = db.collection("users")

        const documentExists = await collection.findOne({email: username},{documents:{$exists: true}})
        if(documentExists==null){
            await collection.updateOne({email: username}, {$set:{documents:[]}})
        }

        await collection.updateOne(
            {email: username},
            {$push:{documents: document}}
        )

     
           

        
       
    }catch(e){
        console.log(e);
    }
    return NextResponse.json(body);
}

