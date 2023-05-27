'use client';
import React from 'react'

import { SessionProvider as AuthSessionProvider } from 'next-auth/react';


const NextAuthProvider = ({children}) => {
  return (
    <AuthSessionProvider>{children}</AuthSessionProvider>
  )
}

export default NextAuthProvider