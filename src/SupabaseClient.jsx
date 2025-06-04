import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://icgvhyzfomovnpfjgdnp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZ3ZoeXpmb21vdm5wZmpnZG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMDYzOTcsImV4cCI6MjA2NDU4MjM5N30.L2JUKmClKrAoHn0UpufAqmMe5u4WKwT4uMIedA_c4Kw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
