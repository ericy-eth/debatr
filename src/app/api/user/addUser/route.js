import clientPromise from "../../../../components/mongodb/index"
import { NextResponse } from "next/server"
export async function POST(request){

    const body = await request.json()
    console.log("In api route ", body);

    // const userDocument = body.userDocument
    // console.log("In api route ", userDocument);
    // const username = userDocument.email



    // try{
    //     const client = await clientPromise
    //     const db = client.db("debatr")


    //     const collection = db.collection("users")

    //     const documentExists = await collection.findOne({email: username})
    //     if(documentExists==null){
    //         await collection.insertOne(userDocument)
    //     }

       

     
           

        
       
    // }catch(e){
    //     console.log(e);
    // }
    return NextResponse.json({});
}

