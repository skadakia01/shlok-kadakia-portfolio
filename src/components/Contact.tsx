// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//           <p className="text-gray-600">Feel free to reach out to me for any questions or opportunities!</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-8"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
//                 <Mail className="text-white" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
//                 <p className="text-gray-600">shlokkadakia98@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
//                 <Phone className="text-white" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
//                 <p className="text-gray-600">+1 224-933-6484</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
//                 <MapPin className="text-white" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
//                 <p className="text-gray-600">Chicago, Illinois</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.form
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//               />
//             </div>
//             <div>
//               <textarea
//                 placeholder="Your Message"
//                 rows={4}
//                 className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
//               ></textarea>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS Service ID from .env file
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS Template ID from .env file
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // EmailJS Public Key from .env file
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          setMessageStatus("Message sent successfully! ✅");
          form.current.reset(); // Clear form after sending
        },
        (error) => {
          console.log("Error:", error.text);
          setMessageStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">shlokkadakia98@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+1 224-933-6484</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Chicago, Illinois</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {messageStatus && (
              <p className={`text-center ${messageStatus.includes("❌") ? "text-red-600" : "text-green-600"} mb-4`}>
                {messageStatus}
              </p>
            )}

            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
