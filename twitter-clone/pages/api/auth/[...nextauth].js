
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    // ...add more providers here
  ],
  callbacks:{
      async Session({session,token}){
          session.user.tag = session.user.name.split("").join("").toLacaleLowerCase();
          session.user.uid = token.sub;
          return session
      },
  },
})