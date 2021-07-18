
create or replace function public.dmlapi_notes_j2r(
    fv_jsonb jsonb
)
    returns public.notes
    language plpgsql
    security definer
as $function$
------------------------------------------------------------------
-- (c) Copyright 2021 Antoniel Lima (antonielliimma@gmail.com)
-- (c) Copyright 2021 desenroladev.com.br
------------------------------------------------------------------
-- public.notes: jsonb to record
------------------------------------------------------------------
declare
    lv_data             public.notes;
begin
    ------------------------------------------------------------
    lv_data.id                                        = coalesce((fv_jsonb->>'id')::character varying, gen_random_uuid());                                        --001 character varying not null
    lv_data.title                                     = fv_jsonb->>'title';                                     --002 character varying(60) not null
    lv_data.description                               = fv_jsonb->>'description';                               --003 text
    lv_data.image                                     = fv_jsonb->>'image';                                     --004 character varying(255)
    lv_data.created_at                                = coalesce((fv_jsonb->>'created_at')::timestamp with time zone, now());                                --005 timestamp with time zone not null
    lv_data.updated_at                                = coalesce((fv_jsonb->>'updated_at')::timestamp with time zone, now());                                --006 timestamp with time zone not null
    ------------------------------------------------------------
    return lv_data;
end;
$function$;