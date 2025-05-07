import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 max-w-lg mx-auto border border-gray-700/50 shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Contact Us
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Message"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "submitting"}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
      {status === "success" && (
        <p className="mt-4 text-center text-green-400">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-center text-red-400">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </motion.div>
  );
};

export default ContactForm;