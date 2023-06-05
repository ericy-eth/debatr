export default async function fetchAllSpeeches(email){
    const res = await fetch("http://localhost:3000/api/speech/getSpeech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: email}),
    });
    return res
  }