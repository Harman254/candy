import AuthForm from '@/components/Authform'
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/account')
  }
  return (
    <div className='flex justify-center items-center container min-h-screen'>
      <AuthForm />

    </div>
  )
}

export default page