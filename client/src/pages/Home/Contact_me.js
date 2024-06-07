import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../components/SectionTitle";

// npm i @emailjs/browser

const Contact_me = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form data:", form.current); // Debug log

    emailjs
      .sendForm(
        "service_p90rhzb", // Service ID from EmailJS
        "template_s1zdb9p", // Template ID from EmailJS
        form.current,
        "_5WPD2zVgi_oAw6uy" // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          form.current.reset(); // Reset form fields
          setMessageSent(true); // Set message sent state to true
          setTimeout(() => setMessageSent(false), 5000); // Hide message after 5 seconds
        },
        (error) => {
          console.error("Error:", error); // Log the full error object
          console.log(error.text);
        }
      )
      .catch((error) => {
        console.error("Catch Error:", error); // Catch and log any unexpected errors
      });
  };

  return (
    <div>
      <SectionTitle title="Contact Me " />
      <div className="max-w-md mx-auto p-4">
        {messageSent && (
          <div className="mb-4 p-2 bg-green-500 text-white rounded">
            Message sent successfully!
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <label className="mt-4 text-white">NAME</label>
          <input
            type="text"
            name="user_name"
            className="w-full h-9 p-2 rounded border border-gray-300 focus:border-teal-500 outline-none"
          />
          <label className="mt-4 text-white">EMAIL</label>
          <input
            type="email"
            name="user_email"
            className="w-full h-9 p-2 rounded border border-gray-300 focus:border-teal-500 outline-none"
          />
          <label className="mt-4 text-white">MESSAGE</label>
          <textarea
            name="message"
            className="w-full h-24 p-2 rounded border border-gray-300 focus:border-teal-500 outline-none"
          />
          <input
            type="submit"
            value="Send"
            className="mt-8 cursor-pointer bg-secondary text-white border-none p-2 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact_me;
