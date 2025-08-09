import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (keeping existing)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Posts table for articles
export const posts = pgTable("posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titre: text("titre").notNull(),
  slug: text("slug").notNull().unique(),
  contenu: text("contenu").notNull(),
  date_publication: timestamp("date_publication").defaultNow().notNull(),
  image_url: text("image_url"),
});

// Media table for videos, podcasts, interviews
export const media = pgTable("media", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  titre: text("titre").notNull(),
  type: text("type").notNull(), // video/audio/article
  lien: text("lien").notNull(),
  miniature: text("miniature"),
  duree: text("duree"),
  date_publication: timestamp("date_publication").defaultNow().notNull(),
});

// Projects table
export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nom: text("nom").notNull(),
  description: text("description").notNull(),
  pays: text("pays").notNull(),
  statut: text("statut").notNull(), // Réalisé/En cours/Planifié
  image_url: text("image_url"),
  capacite: text("capacite"),
  emplois_crees: text("emplois_crees"),
  foyers_alimentes: text("foyers_alimentes"),
  co2_evite: text("co2_evite"),
  date_mise_service: text("date_mise_service"),
});

// Messages table for contact form
export const messages = pgTable("messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nom: text("nom").notNull(),
  email: text("email").notNull(),
  sujet: text("sujet"),
  message: text("message").notNull(),
  date_envoi: timestamp("date_envoi").defaultNow().notNull(),
});

// Subscribers table for newsletter
export const subscribers = pgTable("subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  date_inscription: timestamp("date_inscription").defaultNow().notNull(),
});

// Mentorship requests table
export const mentorship_requests = pgTable("mentorship_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nom: text("nom").notNull(),
  email: text("email").notNull(),
  motivation: text("motivation").notNull(),
  date_demande: timestamp("date_demande").defaultNow().notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPostSchema = createInsertSchema(posts).omit({
  id: true,
  date_publication: true,
});

export const insertMediaSchema = createInsertSchema(media).omit({
  id: true,
  date_publication: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  date_envoi: true,
});

export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true,
  date_inscription: true,
});

export const insertMentorshipRequestSchema = createInsertSchema(mentorship_requests).omit({
  id: true,
  date_demande: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof posts.$inferSelect;

export type InsertMedia = z.infer<typeof insertMediaSchema>;
export type Media = typeof media.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type InsertMentorshipRequest = z.infer<typeof insertMentorshipRequestSchema>;
export type MentorshipRequest = typeof mentorship_requests.$inferSelect;
