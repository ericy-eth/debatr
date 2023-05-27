import clientPromise from ".";
export default async (req,res)=>{


   

    const username = req.body.username
    const password = req.body.password
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    try{
        const client = await clientPromise
        const db = client.db("debatr")
        const collection = db.collection("users")

        collection.findOne({
            "username": username,
          }).then((doc) => {
            if (doc) {
              // User already exists
            } else {
              // User does not exist
              collection.insertOne(user);
            }
          });
     
           

        
       
    }catch(e){
        console.log(e);
    }
    return;
}