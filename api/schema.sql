-- Supabase schema for portfolio contact form
-- Run this in the SQL Editor at supabase.com

create table if not exists messages (
  id         bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name       text not null,
  email      text not null,
  message    text not null
);

-- Row-Level Security: allow anyone to insert, nobody to read
alter table messages enable row level security;

create policy "Allow insert" on messages
  for insert with check (true);

-- Prevent client reads (only Supabase dashboard can read)
create policy "No public reads" on messages
  for select using (false);
