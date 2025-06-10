// routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import { sendEmail } from "./email.js";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (!email.includes("@")) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      await sendEmail({ name, email, subject, message });

      console.log("Contact form submitted:", { name, email, subject });

      res.status(200).json({
        message: "Message received and email sent successfully",
        data: { name, email, subject },
      });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        message: "Error processing your request",
        error: error.message || error,
      });
    }
  });

  return createServer(app);
}
