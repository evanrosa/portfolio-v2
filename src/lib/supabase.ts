import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side Supabase instance with Clerk auth
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
    accessToken: async () => {
        const { getToken } = await auth()
        return getToken()
    },
})

// Server-side Supabase instance for operations that don't require auth
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)
