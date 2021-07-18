
CREATE TABLE public.notes (
	id varchar NOT NULL DEFAULT gen_random_uuid(),
	title varchar(60) NOT NULL,
	description text NULL,
	image varchar(255) NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	updated_at timestamptz NOT NULL DEFAULT now()
);
