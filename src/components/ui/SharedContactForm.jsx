// import { useState } from "react";
// import { toast } from "react-toastify";
// import { sendEmailToMyAccount } from "../../services/emailjs/emailService";

// const SharedContactForm = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     message: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const setField = (key) => (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     setIsLoading(true);

//     try {

//       const templateParams = {

//         senderName: formData.name,

//         reply_to: formData.email,

//         message: `
//             Name: ${formData.name}

//             Email: ${formData.email}

//             Phone: ${formData.phone}

//             Address: ${formData.address}

//             Message:
//             ${formData.requirement}
//         `,
//       };

//       await sendEmailToMyAccount(templateParams);

//       toast.success("Message sent successfully");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         requirement: "",
//       });

//     } catch (error) {

//       console.log(error);

//       toast.error(
//         error.message || "Failed to send message"
//       );

//     } finally {

//       setIsLoading(false);

//     }
//   };

//   return (

//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4"
//     >

//       <input
//         type="text"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={setField("name")}
//         className="border p-3 rounded-lg"
//         required
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={setField("email")}
//         className="border p-3 rounded-lg"
//         required
//       />

//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={setField("phone")}
//         className="border p-3 rounded-lg"
//         required
//       />

//       <input
//         type="text"
//         placeholder="Address"
//         value={formData.address}
//         onChange={setField("address")}
//         className="border p-3 rounded-lg"
//       />

//       <textarea
//         placeholder="Write your requirement what you want"
//         value={formData.requirement}
//         onChange={setField("message")}
//         className="border p-3 rounded-lg"
//         rows={5}
//         required
//       />

//       <button
//         type="submit"
//         disabled={isLoading}
//         className="bg-black text-white p-3 rounded-lg"
//       >
//         {isLoading ? "Sending..." : "Send Message"}
//       </button>

//     </form>
//   );
// };

// export default SharedContactForm;



import { useState } from "react";
import { toast } from "react-toastify";
import { sendEmailToMyAccount } from "../../services/emailjs/emailService";

const SharedContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const setField = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setIsLoading(true);

    try {

      const templateParams = {

        senderName: formData.name,

        reply_to: formData.email,

        phone: formData.phone,

        address: formData.address,

        message: formData.message,
      };

      await sendEmailToMyAccount(templateParams);

      toast.success("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      toast.error(
        error.message || "Failed to send message"
      );

    } finally {

      setIsLoading(false);

    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={setField("name")}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={setField("email")}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={setField("phone")}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={setField("address")}
        className="border p-3 rounded-lg"
      />

      <textarea
        placeholder="Write your requirement what you want"
        value={formData.message}
        onChange={setField("message")}
        className="border p-3 rounded-lg"
        rows={5}
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-black text-white p-3 rounded-lg"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>

    </form>
  );
};

export default SharedContactForm;