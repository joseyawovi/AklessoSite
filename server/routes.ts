import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPostSchema, insertMediaSchema, insertProjectSchema, insertMessageSchema, insertSubscriberSchema, insertMentorshipRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Posts routes
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:id", async (req, res) => {
    try {
      const post = await storage.getPost(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const data = insertPostSchema.parse(req.body);
      const post = await storage.createPost(data);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: "Invalid post data" });
    }
  });

  // Media routes
  app.get("/api/media", async (req, res) => {
    try {
      const media = await storage.getAllMedia();
      res.json(media);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch media" });
    }
  });

  app.post("/api/media", async (req, res) => {
    try {
      const data = insertMediaSchema.parse(req.body);
      const media = await storage.createMedia(data);
      res.status(201).json(media);
    } catch (error) {
      res.status(400).json({ message: "Invalid media data" });
    }
  });

  // Projects routes
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const data = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(data);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: "Invalid project data" });
    }
  });

  // Messages routes
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getAllMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  app.post("/api/messages", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  // Subscribers routes
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });

  app.post("/api/subscribers", async (req, res) => {
    try {
      const data = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(data);
      res.status(201).json(subscriber);
    } catch (error) {
      res.status(400).json({ message: "Invalid subscriber data" });
    }
  });

  // Mentorship requests routes
  app.get("/api/mentorship-requests", async (req, res) => {
    try {
      const requests = await storage.getAllMentorshipRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mentorship requests" });
    }
  });

  app.post("/api/mentorship-requests", async (req, res) => {
    try {
      const data = insertMentorshipRequestSchema.parse(req.body);
      const request = await storage.createMentorshipRequest(data);
      res.status(201).json(request);
    } catch (error) {
      res.status(400).json({ message: "Invalid mentorship request data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
