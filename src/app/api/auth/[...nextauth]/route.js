import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/components/mongodb'
import { signIn, signOut } from 'next-auth/react'
export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  // adapter: MongoDBAdapter(clientPromise, {databaseName: "debatr"}),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  pages:{
    signIn: '/signup'
  },
  callbacks:{

    // async signOut(baseUrl){
    //     return "http://localhost:3000"
    // },
    // async signIn(){
    //   return "http://localhost:3000/home"
    // },
    async session({ token, session }) {
    
      return session
    },
    async jwt({ token, user }) {
      return token


      //add logic here
    },
  },
  
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }