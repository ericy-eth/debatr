
export default async function getUserSession(){
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      return res
  }