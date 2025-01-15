import {
  pgTable,
  serial,
  varchar,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  url: varchar("url", { length: 255 }).notNull(),
  fav: boolean("fav").default(false),
  authorId: integer("author_id"),
  createdAt: timestamp("created_at").defaultNow(),
})

export type BookmarkType = typeof bookmarks.$inferInsert

export const authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  username: varchar().unique().notNull(),
  name: varchar(),
  avatarUrl: varchar("avatar_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
})

export type AuthorType = typeof authors.$inferInsert

// Relations
export const authorsRelations = relations(authors, ({ many }) => ({
  bookmarks: many(bookmarks),
}))

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  author: one(authors, {
    fields: [bookmarks.authorId],
    references: [authors.id],
  }),
}))
