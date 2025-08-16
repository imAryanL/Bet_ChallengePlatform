import { createClient } from '@supabase/supabase-js'

const URL = 'https://mmvgnmlatqbrtmxrrqhr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tdmdubWxhdHFicnRteHJycWhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDIyMDgsImV4cCI6MjA2MDAxODIwOH0.A3qEVXyDAaBL2w8NAB5xmLr-ctiqSlnx9LFR4v0x1iM';

export const supabase = createClient(URL, API_KEY);