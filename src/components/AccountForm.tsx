"use client"
import React from 'react'
import {Session}  from "@supabase/auth-helpers-nextjs"


interface AccountFormProps {
    session: Session | null
    
}

const AccountForm = ({session}: AccountFormProps) => {
    if(!session) return null
  return (
    <div className='bg-amber-300 container mx-auto min-h-screen justify-center items-center'>
        <div className='bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2'>
            <h1 className='text-center text-3xl font-semibold mb-10'>
            Welcome {session.user?.email}
            </h1>
            <p className='text-center text-xl mb-10'>
            You are now signed in. You can sign out by clicking the button below.
            </p>
            <div className='flex justify-center'>
            <button
                className='bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => {
                window.location.href = '/auth/signout'
                }}
            >
                Sign out
            </button>
            </div>
        </div>
    </div>
  )
}

export default AccountForm