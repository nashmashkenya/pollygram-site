-- Pollygram institutional leads / CRM — run in Supabase SQL editor (or migrate).
-- Extends the minimal leads table used by the storefront + admin.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  organisation text,
  phone text,
  email text,
  products text,
  message text,
  source text,
  status text default 'new',
  estimated_value numeric default 0,
  assigned_to text default '',
  lead_category text,
  page_source text,
  device_type text,
  products_json jsonb default '[]'::jsonb,
  quantities_json jsonb default '[]'::jsonb,
  meta jsonb default '{}'::jsonb,
  timeline jsonb default '[]'::jsonb,
  internal_notes text,
  delivery_county text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Legacy columns from early installs are preserved; add missing columns:
alter table public.leads add column if not exists email text;
alter table public.leads add column if not exists status text default 'new';
alter table public.leads add column if not exists estimated_value numeric default 0;
alter table public.leads add column if not exists assigned_to text default '';
alter table public.leads add column if not exists lead_category text;
alter table public.leads add column if not exists page_source text;
alter table public.leads add column if not exists device_type text;
alter table public.leads add column if not exists products_json jsonb default '[]'::jsonb;
alter table public.leads add column if not exists quantities_json jsonb default '[]'::jsonb;
alter table public.leads add column if not exists meta jsonb default '{}'::jsonb;
alter table public.leads add column if not exists timeline jsonb default '[]'::jsonb;
alter table public.leads add column if not exists internal_notes text;
alter table public.leads add column if not exists delivery_county text;
alter table public.leads add column if not exists updated_at timestamptz default now();

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_created_idx on public.leads (created_at desc);
create index if not exists leads_org_idx on public.leads (organisation);

alter table public.leads enable row level security;

-- Anonymous site visitors can INSERT (lead capture + WhatsApp logging)
drop policy if exists leads_insert_public on public.leads;
create policy leads_insert_public on public.leads for insert with check (true);

-- Authenticated admins read/update/delete (adjust role checks for production)
drop policy if exists leads_select_auth on public.leads;
create policy leads_select_auth on public.leads for select using (auth.role() = 'authenticated');

drop policy if exists leads_update_auth on public.leads;
create policy leads_update_auth on public.leads for update using (auth.role() = 'authenticated');

drop policy if exists leads_delete_auth on public.leads;
create policy leads_delete_auth on public.leads for delete using (auth.role() = 'authenticated');
