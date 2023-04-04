
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rigfvlywigmalamneocg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZ2Z2bHl3aWdtYWxhbW5lb2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NTgxNjgsImV4cCI6MTk5NDIzNDE2OH0.-BJ_pHgf6e9PaIHLZpI25yR0UpWlXHoXh-W9oxIVtHQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;