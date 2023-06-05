
export default async function getUserSession(){
    const res = await fetch("http://localhost:3000/api/auth/session", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      return res
  }