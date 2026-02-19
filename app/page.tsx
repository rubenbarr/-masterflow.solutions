import Image from "next/image";
import logo from "./assets/master-flow-Photoroom.png";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 animationHero relative overflow-hidden">
        {/* Gold radial glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,38,0.08),transparent_70%)]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <Image
            src={logo}
            alt="MasterFlow Solutions LLC Logo"
            width={420}
            height={220}
            priority
            className="mb-8 fade-up"
          />

          <h1 className="md:text-6xl font-bold text-gold mb-6 text-4xl gold-shimmer fade-up delay-1">
            MasterFlow Solutions LLC — Whole Home Solutions You Can Trust
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 fade-up delay-2">
            Locally owned and operated, providing high-end home services at
            community-friendly prices — with 24/7 emergency support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-up delay-3">
            <a
              href="#contact"
              className="bg-gold text-blackPrimary px-8 py-3 font-semibold rounded hover:bg-goldDark transition duration-300 hover:scale-105"
            >
              Request Service
            </a>

            <a
              href="tel:4233095060"
              className="border border-gold px-8 py-3 rounded text-gold hover:bg-gold hover:text-blackPrimary transition duration-300 hover:scale-105"
            >
              Emergency Support
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 px-6 bg-black text-gold text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-8 bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent">
          Small Town Values. High-End Standards.
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            MasterFlow Solutions LLC is a locally owned and operated whole-home
            solutions provider proudly serving our small-town community and
            surrounding areas. For over a year, we have built our reputation the
            right way — through integrity, hard work, and genuine care for the
            people we serve.
          </p>

          <p>
            We believe in delivering extremely high-end service without the
            extreme price tag. Our mission is simple: raise the standard of home
            service while keeping it affordable for our neighbors.
          </p>

          <p>
            From routine home needs to urgent emergencies, we are available 24
            hours a day, 7 days a week — because when your home needs help,
            waiting isn’t an option.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-20 px-6 bg-blackPrimary text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-12 bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-300">
          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">Integrity</h3>
            <p>
              We communicate honestly and operate with full transparency from
              start to finish.
            </p>
          </div>

          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">Excellence</h3>
            <p>
              We deliver premium-level workmanship with attention to detail.
            </p>
          </div>

          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">
              Reliability
            </h3>
            <p>When we commit, we follow through — every time.</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-10 bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent">
          Why Homeowners Choose MasterFlow Solutions
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 space-y-4 text-lg">
          <p>• Locally Owned & Operated</p>
          <p>• Small-Town Customer Care</p>
          <p>• Whole-Home Service Provider</p>
          <p>• 24/7 Emergency Support</p>
          <p>• High-End Results at Community Pricing</p>
          <p>• Professional, Dependable Service</p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="py-20 px-6 bg-blackPrimary text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-6 bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent">
          Our Mission
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          To provide exceptional, high-end home services with integrity and
          reliability, while keeping our pricing accessible to the community we
          proudly serve.
        </p>
      </section>

      {/* =================== COMMENTS ======================== */}
      <section className="relative py-28 px-6 bg-black overflow-hidden">
        {/* Background subtle gold radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,180,38,0.08),transparent_60%)]"></div>

        <div className="relative z-10 text-center">
          <h2
            className="font-heading text-3xl md:text-5xl mb-16 
      bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] 
      bg-clip-text text-transparent fade-up"
          >
            Crafted to Impress. Built to Last.
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              "The level of craftsmanship was beyond what we expected. Every detail was handled with precision and professionalism. The finished work truly reflects high-end quality.",
              "When we needed urgent service, they responded immediately. Clean, efficient, and incredibly professional. The results exceeded competitors by far.",
              "It’s rare to find small-town values combined with luxury-level workmanship. The attention to detail and commitment to excellence truly set them apart.",
            ].map((review, index) => (
              <div
                key={index}
                className="
          backdrop-blur-lg
          bg-white/5
          border border-[#d4b426]
          p-10
          rounded-2xl
          transition duration-500
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(212,180,38,0.5)]
          gold-glow
          fade-up
          "
              >
                {/* Gold Stars */}
                <div className="flex justify-center mb-6 text-[#d4b426] text-xl tracking-widest">
                  ★★★★★
                </div>

                <p className="text-gray-300 italic leading-relaxed text-lg">
                  “{review}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-gold text-blackPrimary text-center flex flex-col gap-3"
      >
        <h2 className="font-heading text-3xl md:text-4xl mb-6 gold-shimmer">
          Contact MasterFlow Solutions LLC
        </h2>

        <p className="mb-4 text-lg font-medium">
          Phone:{" "}
          <a href="tel:4233095060" className="underline">
            423-309-5060
          </a>
        </p>

        <p className="text-lg font-medium">
          Email:{" "}
          <a href="mailto:info@masterflowsolutions.com" className="underline">
            info@masterflowsolutions.com
          </a>
        </p>
        <div className="flex flex-col items-center">
        <a
          href="https://www.facebook.com/share/1GEy5JzXVt/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border border-gold text-gold hover:bg-gold hover:text-blackPrimary transition duration-300 hover:scale-110"
          >
          <FaFacebook/>
        </a>
          </div>

        <a
          href="tel:4233095060"
          className="bg-blackPrimary text-gold rounded font-semibold hover:opacity-90 transition"
        >
          Call 24/7 Now
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blackPrimary text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} MasterFlow Solutions LLC. All Rights
        Reserved.
      </footer>
    </main>
  );
}
