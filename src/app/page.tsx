"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      
      <div className="w-full text-center py-8 bg-white shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">Contact Us</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 py-10">
        
        <div className="relative w-full h-[600px] bg-white rounded-lg shadow-lg hidden md:block">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233.863516689105!2d67.0346373!3d24.9262941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f11d8d8bddd%3A0x37e3f858ba34486b!2sNazimabad%20No.%202%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1640953032243!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-white px-8 py-2 shadow-lg flex flex-col justify-center rounded-lg">
          
          <div className="flex items-center space-x-4 mb-5">
            <FaMapMarkerAlt className="text-black text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">Nazimabad No. 2, Block B, near Rose Men Saloon</p>
              <p className="text-gray-600">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 mb-5">
            <FaPhoneAlt className="text-black text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">0315 2625068</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-5">
            <FaEnvelope className="text-black text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">as9554040@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-5">
            <FaClock className="text-black text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Business Hours</h2>
              <p className="text-gray-600">Mon-Fri: 9 AM - 10 PM</p>
              <p className="text-gray-600">Sat: 10 AM - 10 PM | Sun: Closed</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://facebook.com/swifbuy" className="text-black text-2xl hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/swifbuy0" className="text-black text-2xl hover:scale-110 transition">
              <FaInstagram />
            </a>
          </div>

          <div className="w-full flex justify-center mt-6 md:hidden">
            <button
              onClick={() => window.open("https://goo.gl/maps/Jq8Rm7P8xtiwhMQbA", "_blank")}
              className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-black transition"
            >
              View on Map
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-black transition"
        >
          {showForm ? "Close Form" : "Send Us a Message"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 shadow-lg w-full max-w-4xl mx-auto mt-6 rounded-lg transition-all">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              required
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
