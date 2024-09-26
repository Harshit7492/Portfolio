import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noOfProjects: String,
    yearOfExperience: String,
    noOfClients: String,
    skills: String,
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;