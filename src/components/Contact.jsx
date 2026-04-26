import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "ayoublemguita06@gmail.com",
    href: "mailto:ayoublemguita06@gmail.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ayoublemguita",
    href: "https://linkedin.com/in/ayoublemguita",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/ayoublemguita",
    href: "https://github.com/ayoublemguita",
    color: "from-gray-500 to-gray-700",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Agadir, Morocco",
    href: null,
    color: "from-green-500 to-teal-500",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("opacity-100", "translate-y-0");
          ref.current?.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === "message" ? value.slice(0, 500) : value;

    setForm((prev) => ({ ...prev, [name]: nextValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      await axios.post(`${apiUrl}/api/contact`, form);
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 font-mono text-sm text-white transition-all duration-300 focus:outline-none focus:border-purple-500 focus:bg-white/10 ${
      errors[field] ? "border-red-500" : "border-white/10"
    } bg-white/5 placeholder-gray-500`;

  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm tracking-widest text-cyan-400">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Have a project in mind or just want to say hi? Feel free to reach out. I
            will get back to you within 24 hours.
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-12 opacity-0 transition-all duration-700 translate-y-10 md:grid-cols-2"
        >
          <div className="space-y-6">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Let&apos;s <span className="gradient-text">talk!</span>
            </h3>

            {contactInfo.map((info) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.label}
                  className="glass gradient-border group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:glow-purple"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl text-white transition-all duration-300 group-hover:scale-110 ${info.color}`}
                  >
                    <Icon />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {info.label}
                    </p>

                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-white transition-all duration-300 hover:gradient-text"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="glass rounded-2xl border border-green-500/30 p-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Available for freelance
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Open to new opportunities and collaborations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass gradient-border rounded-2xl p-8">
            <h3 className="mb-6 text-xl font-bold text-white">
              Send a <span className="gradient-text">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 font-mono text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  className={`${inputClass("message")} resize-none`}
                />

                <div className="mt-1 flex items-center justify-between">
                  {errors.message ? (
                    <p className="font-mono text-xs text-red-400">{errors.message}</p>
                  ) : (
                    <span />
                  )}

                  <span
                    className={`font-mono text-xs ${
                      form.message.length > 400 ? "text-orange-400" : "text-gray-600"
                    }`}
                  >
                    {form.message.length}/500
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full rounded-xl py-4 font-bold text-white transition-all duration-300 ${
                  status === "loading"
                    ? "cursor-not-allowed bg-gray-700"
                    : "glow-purple bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 hover:from-purple-500 hover:to-cyan-400 active:scale-95"
                }`}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0 1 8-8v8z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                  <span className="font-bold text-green-400">OK</span>
                  <p className="text-sm text-green-200">
                    Message sent successfully. I will get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                  <span className="font-bold text-red-400">ERR</span>
                  <p className="text-sm text-red-200">
                    Something went wrong while sending your message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
