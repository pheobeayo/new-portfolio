import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = ({ show }) => {
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
          method="post"
          data-netlify="true"
          name="Contact"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="Contact" />

          <div className="flex gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="py-3 px-4 bg-[#112240] w-1/2 text-name placeholder:text-[#4a5568] text-sm border border-[#233554] focus:border-[#FF5823] transition-colors outline-none rounded-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="py-3 px-4 bg-[#112240] w-1/2 text-name placeholder:text-[#4a5568] text-sm border border-[#233554] focus:border-[#FF5823] transition-colors outline-none rounded-sm"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="py-3 px-4 bg-[#112240] text-name placeholder:text-[#4a5568] text-sm border border-[#233554] focus:border-[#FF5823] transition-colors outline-none rounded-sm"
          />

          <textarea
            placeholder="Your message..."
            name="message"
            rows={6}
            className="py-3 px-4 bg-[#112240] text-name placeholder:text-[#4a5568] text-sm border border-[#233554] focus:border-[#FF5823] transition-colors outline-none resize-none rounded-sm"
          />

          <button
            type="submit"
            className="bg-[#FF5823] text-[#0a192f] py-3 px-6 text-sm font-bold tracking-widest hover:bg-[#e04a1a] transition-all duration-300 rounded-sm w-fit"
          >
            Send Message ↗
          </button>
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
              <span className="text-sub text-sm">+2348032215653</span>
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
              <span className="text-sub text-sm">Nigeria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;