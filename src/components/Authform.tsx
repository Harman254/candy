'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../types/supabase'


export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  const redirectUrl = `${window.location.protocol}//${window.location.host}/auth/callback`
  console.log(redirectUrl)

  return (
    <Auth
      supabaseClient={supabase}
      appearance={{
        theme: ThemeSupa

      }}
      showLinks
      providers={['google', 'github', 'twitter']}
      redirectTo={redirectUrl}
    />
  )
}

// {
//     theme: ThemeSupa,
//     variables: {
//       default: {
//         colors: {
//           brand: 'red',
//           brandAccent: 'darkred',
//         },
//       },
//     },
//   }