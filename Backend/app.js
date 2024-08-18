const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.json("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
