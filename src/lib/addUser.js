export default async function addUser(userDocument){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/user/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userDocument: userDocument}),
    });
    return res
  }