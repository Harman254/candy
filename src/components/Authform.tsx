'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../types/supabase'


export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa   
    
    }}
      theme="evenDarker"
      showLinks={false}
      providers={['google', 'facebook', 'twitter']}
      redirectTo="http://localhost:3000/auth/callback"
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