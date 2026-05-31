import express from "express";
import cors from "cors";

export const app = express();

app.use( 
  cors({ 
    origin: [
      "http://localhost:5173",
      "https://portfolio-kappa-sable-8cggpp2cng.vercel.app" // Removed /
    ],
    credentials: true, 
  }), 
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running 🚀");
});
// routes
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projects.route.js";
import statsRoutes from "./routes/stats.routes.js";

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/stats", statsRoutes);
