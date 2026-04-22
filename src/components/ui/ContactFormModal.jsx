import { useState } from "react";

const ContactFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate submit (replace with emailjs/api later)
    // Form submitted successfully - integrate with EmailJS/API here

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    onClose(); // Close on success
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#283618] mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#283618] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-medium text-[#283618] mb-1">
          Phone / WhatsApp
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all"
          placeholder="+91 98765 43210"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-[#283618] mb-1">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all resize-vertical"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#606C38] to-[#283618] hover:from-[#283618] hover:to-[#606C38] text-[#FEFAE0] py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactFormModal;
