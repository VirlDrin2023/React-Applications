const express = require("express");
const contactsRoutes = require("./routes/contact");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contacts route
app.use("/api/contacts", contactsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
