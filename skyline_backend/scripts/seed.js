const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const Genre = require("../models/Genre");

dotenv.config();

const defaultGenres = [
  { title: "Action" },
  { title: "Drama" },
  { title: "Comedy" },
  { title: "Thriller" },
  { title: "Romance" },
  { title: "Sci-Fi" },
  { title: "Horror" },
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error(" Error connecting to DB:", err.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    if (process.argv.includes("--reset")) {
      await User.deleteMany({});
      await Genre.deleteMany({});
    }

    const adminEmail = process.env.ADMIN_EMAIL || "admin@skyline.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "Admin@123";

    const adminExists = await User.findOne({ email: adminEmail });

    if (adminExists) {
    } else {
      const admin = await User.create({
        name: "Admin User",
        email: adminEmail,
        password: adminPassword,
        isAdmin: true,
      });
      console.log("Admin created:", admin.email);
    }

    const genreCount = await Genre.countDocuments();
    if (genreCount > 0) {
      console.log(" Genres exist");
    } else {
      await Genre.insertMany(defaultGenres);
      console.log("genres inserted");
    }

    console.log("🎉 Seeding completed");
    process.exit();
  } catch (error) {
    console.error("Error seeding:", error.message);
    process.exit(1);
  }
};

const run = async () => {
  await connectDB();
  await seedData();
};

run();
