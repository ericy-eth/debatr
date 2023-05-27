import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
const authOptions=  {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    pages:{
        signIn: '/signup'
    },
    secret: process.env.JWT_SECRET,
  
    }

    export default authOptions


