CREATE TABLE "posts" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"author_uuid" uuid NOT NULL,
	"parent_post_uuid" uuid NOT NULL,
	"content" text NOT NULL,
	"lat" double precision NOT NULL,
	"lng" double precision NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_uuid_users_uuid_fk" FOREIGN KEY ("author_uuid") REFERENCES "public"."users"("uuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "posts_author_uuid_index" ON "posts" USING btree ("author_uuid");--> statement-breakpoint
CREATE INDEX "posts_parent_post_uuid_index" ON "posts" USING btree ("parent_post_uuid");--> statement-breakpoint
CREATE INDEX "posts_created_at_index" ON "posts" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "posts_coords_index" ON "posts" USING btree ("lat","lng");