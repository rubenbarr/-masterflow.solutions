import Image from "next/image";
import logo from "./assets/master-flow-Photoroom.png";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-blackPrimary">

        <Image
          src={logo}
          alt="MasterFlow Solutions LLC Logo"
          width={420}
          height={220}
          priority
          className="mb-8"
        />

        <h1 className="font-heading  md:text-6xl font-bold text-gold mb-6 font-heading text-4xl bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent">
          MasterFlow Solutions LLC — Whole Home Solutions You Can Trust
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10">
          Locally owned and operated, providing high-end home services at
          community-friendly prices — with 24/7 emergency support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-gold text-blackPrimary px-8 py-3 font-semibold rounded hover:bg-goldDark transition"
          >
            Request Service
          </a>

          <a
            href="tel:1234567890"
            className="border border-gold px-8 py-3 rounded text-gold hover:bg-gold hover:text-blackPrimary transition"
          >
            Emergency Support
          </a>
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
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-12 bg-gradient-to-r from-[#b8962e] via-[#d4b426] to-[#f5e27a] bg-clip-text text-transparent" >
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-300">

          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">Integrity</h3>
            <p>We communicate honestly and operate with full transparency from start to finish.</p>
          </div>

          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">Excellence</h3>
            <p>We deliver premium-level workmanship with attention to detail.</p>
          </div>

          <div className="border border-gold p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gold mb-4">Reliability</h3>
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

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 px-6 bg-gold text-blackPrimary text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-6 text-[#d4b426]">
          Contact MasterFlow Solutions LLC
        </h2>

        <p className="mb-4 text-lg font-medium">
          Phone: <a href="tel:1234567890" className="underline">123-456-7890</a>
        </p>

        <p className="mb-8 text-lg font-medium">
          Email: <a href="mailto:info@masterflowsolutions.com" className="underline">
            info@masterflowsolutions.com
          </a>
        </p>

        <a
          href="tel:1234567890"
          className="bg-blackPrimary text-gold px-8 py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Call 24/7 Now
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blackPrimary text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} MasterFlow Solutions LLC. All Rights Reserved.
      </footer>

    </main>
  );
}
