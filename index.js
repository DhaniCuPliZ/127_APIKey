import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Jalankan semua di dalam fungsi async
async function startServer() {
  try {
    // 🔗 Koneksi ke MySQL
    const db = await mysql.createConnection({
      host: "localhost",     // Ganti sesuai server kamu
      user: "root",          // Username MySQL
      password: "123",       // Password MySQL
      database: "token_app", // Nama database kamu
    });

    console.log("✅ Terhubung ke database MySQL!");