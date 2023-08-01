import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://sxzzyrxxjvwrhkidurvs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4enp5cnh4anZ3cmhraWR1cnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNzE1MjIsImV4cCI6MjAwNDk0NzUyMn0.LMYq9pQEzaSN2o8DEfxdY6l4xRKnctKUw1gDa5FpmQk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
