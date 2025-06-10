import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";
import { log } from "./utils.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Load .env once here
dotenv.config({ path: join(__dirname, "..", ".env") });
const app = express();
app.get("/", (req, res) => {
    res.send("Working");
});
// Add CORS to allow frontend requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse = undefined;
    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };
    res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
            let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }
            if (logLine.length > 80) {
                logLine = logLine.slice(0, 79) + "…";
            }
            log(logLine);
        }
    });
    next();
});
(async () => {
    try {
        const server = await registerRoutes(app);
        app.use((err, _req, res, _next) => {
            const status = err.status || err.statusCode || 500;
            const message = err.message || "Internal Server Error";
            res.status(status).json({ message });
            console.error("Server error:", err);
        });
        const port = process.env.PORT ? Number(process.env.PORT) : 5000;
        const host = "0.0.0.0";
        server.listen(port, host, () => {
            log(`Backend server running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
    }
})();
