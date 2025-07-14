CREATE TABLE "users" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(32) NOT NULL,
	"display_name" varchar(64),
	"email" varchar(320) NOT NULL,
	"biography" text,
	"password" varchar(128) NOT NULL,
	"avatar_url" varchar(255),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "users_username_index" ON "users" USING btree ("username");--> statement-breakpoint
CREATE INDEX "users_display_name_index" ON "users" USING btree ("display_name");--> statement-breakpoint
CREATE INDEX "users_email_index" ON "users" USING btree ("email");