import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/components/mongodb'
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {databaseName: "debatr"}),
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
    async redirect(url, baseUrl){
        return "http://localhost:3000/home"
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }