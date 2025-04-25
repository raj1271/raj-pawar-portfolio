import { useState } from "react";
import emailjs from 'emailjs-com'; // For handling the contact form submission
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectsSection";
import SkillsSection from "./component/SkillsSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // To manage the loading state
  const [feedback, setFeedback] = useState(""); // To manage success/error feedback

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.message) {
      return "All fields are required!";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Please enter a valid email address!";
    }
    return null; // No validation errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setFeedback(errorMessage);
      return; // Stop submission if validation fails
    }

    setLoading(true);
    setFeedback(""); // Clear previous feedback

    emailjs
      .send(
        "service_my071yn",
        "template_g10u92a",
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        "G8B8fgpThMRGt6WEQ"
      )
      .then(
        (result) => {
          setLoading(false);
          setFeedback("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setFeedback("An error occurred, please try again later.");
        }
      );
  };

  return (
    <>
      <div className="text-white mx-auto relative overflow-hidden z-10 bg-gray-800 p-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          feedback={feedback} // Pass feedback to ContactSection
        />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
