import React from "react";
import {
  RiInstagramLine,
  RiWhatsappLine,
  RiPinterestFill,
} from "@remixicon/react";

const ContactUs = () => {
  return (
    <div id="contact">
      <section className="w-full bg-white mt-[20px] py-[100px] space-y-[75px] font-m">
        {/* Page Heading */}
        <div className="text-center mt-14 mb-14">
          <h2 className="font-marcellus text-center text-3xl sm:text-4xl md:text-6xl leading-0 text-heading-color">
            <span className="hover:text-hover-color">
              GET IN
              <br />
              <span className="text-5xl sm:text-6xl md:text-8xl font-imperial_script">
                Touch
              </span>
            </span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto mt-6 leading-relaxed text-[#556B2F]">
            We’d love to hear from you! For orders, queries, or feedback, reach
            out to us directly.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <div className="bg-[#fffaf2] p-10 rounded-3xl shadow-md flex flex-col items-center space-y-5 border border-[#e4d09b] hover:shadow-lg hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-[#5C3B00]">
              💬 WhatsApp
            </h3>
            <p className="text-center text-[#556B2F]">
              Chat with us directly for orders or inquiries.
            </p>
            <a
              href="https://wa.me/919582131422?text=Hi! I’d like to contact Roop and Roots by Renu."
              target="_blank"
              className="bg-[#8BC34A] text-white font-semibold px-6 py-2 rounded-full shadow-md transition hover:bg-[#6B8E23]"
            >
              Message Us
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#fffaf2] p-10 rounded-3xl shadow-md flex flex-col items-center space-y-5 border border-[#e4d09b] hover:shadow-lg hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-[#5C3B00]">📧 Email</h3>
            <p className="text-center text-[#556B2F]">
              Send us an email and we’ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:roopandrootsbyrenu@gmail.com"
              className="bg-[#8BC34A] text-white font-semibold px-6 py-2 rounded-full shadow-md transition hover:bg-[#6B8E23]"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-14">
          <a
            href="https://wa.me/919582131422?text=Hi! I’d like to contact Roop and Roots by Renu."
            target="_blank"
            className="hover:text-[#6B8E23] transition"
          >
            <RiWhatsappLine size={40} />
          </a>
          <a
            href="https://instagram.com/roopnroots"
            target="_blank"
            className="hover:text-[#6B8E23] transition"
          >
            <RiInstagramLine size={40} />
          </a>
          <a
            href="https://www.pinterest.com/roopandrootsbyrenu/"
            target="_blank"
            className="hover:text-[#6B8E23] transition"
          >
            <RiPinterestFill size={40} />
          </a>
        </div>

        {/* Footer Trust Line */}
        <p className="text-center text-[#556B2F] mt-12 mb-6">
          🔬 Lab-Tested • 🍃 100% Natural • 🚫 Chemical-Free
        </p>

        {/* Signature + Copyright Footer */}
        <p className="text-center text-[#556B2F] mt-12 mb-6">
          Made with Love ❤️ and Herbs 🌿 by Renu
        </p>
        <p className="text-center text-[#556B2F] mt-12 mb-6">
          © 2025 Roop & Roots. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
