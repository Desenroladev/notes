
CREATE TABLE public.todo (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	title varchar(60) NOT NULL,
	created_at timestamptz(0) NOT NULL DEFAULT now(),
	concluded bool NOT NULL DEFAULT false,
	concluded_at timestamptz(0) NULL,
	CONSTRAINT todo_pk PRIMARY KEY (id)
);
