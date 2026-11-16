import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";

const EMAIL = "pheobeayo@gmail.com";

const field =
  "py-3 px-4 bg-[#112240] text-name placeholder:text-[#4a5568] text-sm border border-[#233554] focus:border-[#FF5823] transition-colors outline-none rounded-sm";

const Contact = ({ show }) => {
  // The site is a static build with no form backend, so the form composes an
  // email in the visitor's own mail app instead of posting to a server.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = data.get("subject") || `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`${show && "blur-sm"} pt-6 px-5 sm:px-8 md:px-12 lg:pl-24 ff`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Let's Talk</p>
        <h1 className="text-name text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h1>
        <p className="text-sub text-sm max-w-md">
          You can always reach me — and be sure I'll respond.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-10">
        {/* Form */}
        <motion.form
          className="flex flex-col sm:w-1/2 gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Your name"
              autoComplete="name"
              required
              className={`${field} w-1/2`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Your email"
              autoComplete="email"
              required
              className={`${field} w-1/2`}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            className={field}
          />

          <textarea
            placeholder="Your message..."
            name="message"
            aria-label="Your message"
            rows={6}
            required
            className={`${field} resize-none`}
          />

          <button
            type="submit"
            className="bg-[#FF5823] text-[#0a192f] py-3 px-6 text-sm font-bold tracking-widest hover:bg-[#e04a1a] transition-all duration-300 rounded-sm w-fit"
          >
            Send Message ↗
          </button>
          <p className="text-sub text-xs">
            This opens your email app with the message ready to send.
          </p>
        </motion.form>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="sm:w-1/2 flex flex-col justify-center gap-6 sm:pl-8 border-t sm:border-t-0 sm:border-l border-[#233554] pt-6 sm:pt-0"
        >
          <p className="text-sub text-sm leading-relaxed">
            Whether you want to build something together, discuss a project idea, or just say hello — my inbox is always open.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#112240] flex items-center justify-center">
                <TbPhone className="text-[#FF5823]" />
              </div>
              <a href="tel:+2348032215653" className="text-sub text-sm hover:text-[#FF5823] transition-colors">+234 803 221 5653</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#112240] flex items-center justify-center">
                <TbMail className="text-[#FF5823]" />
              </div>
              <a href="mailto:pheobeayo@gmail.com" className="text-sub text-sm hover:text-[#FF5823] transition-colors">
                pheobeayo@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#112240] flex items-center justify-center">
                <MdOutlineMyLocation className="text-[#FF5823]" />
              </div>
              <span className="text-sub text-sm">Abuja, Nigeria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;