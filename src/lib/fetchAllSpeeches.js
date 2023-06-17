export default async function fetchAllSpeeches(email){
    const res = await fetch("https://www.debatr.xyz/api/speech/getSpeech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: email}),
    });
    return res
  }