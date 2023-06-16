import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { signIn, signOut } from 'next-auth/react'
import clientPromise from '../../../../components/mongodb'
import addUser from '../../../../lib/addUser'
export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  adapter: MongoDBAdapter(clientPromise, {databaseName: "debatr"}),
  providers: [
    GoogleProvider({
      id: "google",
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // async profile(profile){
      //   // console.log("profile test ", profile);
      //   // console.log("profile email ", profile.email);
      //   // const userData = {
      //   //   name: profile.name,
      //   //   email: profile.email,
      //   //   image: profile.image,
      //   //   emailVerified: profile.email_verified,
      //   //   documents: []
      //   // }
        
      //   // const res = await fetch(`${process.env.NEXTAUTH_URL}/user/addUser`, {
      //   //   method: "POST",
      //   //   headers: {
      //   //     "Content-Type": "application/json",
      //   //   },
      //   //   body: JSON.stringify({userDocument: userData}),
      //   // });
      // }
    })
  ],
  pages:{
    signIn: '/signup'
  },
  callbacks:{

  
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