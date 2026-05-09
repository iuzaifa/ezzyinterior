import { useState } from "react";

const SharedContactForm = ({ variant = "page", onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const setField = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        address: formData.address,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setIsLoading(false);
      onSuccess?.();
    } catch (err) {
      setIsLoading(false);
      setError(err?.message || "Failed to send message");
    }
  };

  const showAddress = variant === "page";

  return (
    <form onSubmit={handleSubmit} className={variant === "page" ? "flex flex-col gap-4" : "space-y-4"}>
      {variant === "page" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#283618]">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={setField("name")}
                className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#283618]">Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={setField("email")}
                className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#283618]">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={setField("phone")}
                className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#283618]">WhatsApp Number</label>
              <input
                type="tel"
                required
                placeholder="Enter WhatsApp number"
                value={formData.phone}
                onChange={setField("phone")}
                className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>
          </div>

          {showAddress && (
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#283618]">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={setField("address")}
                className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#283618]">Message</label>
            <textarea
              required
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={setField("message")}
              className="bg-white border border-[#62748e] text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 rounded-xl px-4 py-3 outline-none transition-colors resize-vertical"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#606C38] hover:bg-[#283618] text-[#FEFAE0] text-base py-3 rounded-lg transition-all duration-300 mt-2 font-medium disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </>
      ) : (
        <>
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
                onChange={setField("name")}
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
                onChange={setField("email")}
                className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#283618] mb-1">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={setField("phone")}
              className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#283618] mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={setField("message")}
              className="w-full px-4 py-3 rounded-xl border border-[#62748e]/50 text-[#283618] placeholder:text-[#62748e]/60 focus:border-[#606C38] focus:ring-2 focus:ring-[#606C38]/20 outline-none transition-all resize-vertical"
              placeholder="Tell us about your project..."
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#606C38] to-[#283618] hover:from-[#283618] hover:to-[#606C38] text-[#FEFAE0] py-3 px-6 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </>
      )}
    </form>
  );
};

export default SharedContactForm;

