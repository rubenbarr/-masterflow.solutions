import Image from "next/image";
import logo from "./assets/logo_transparent_with_motto.png"

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-blackPrimary">
        <Image  src={logo} alt="master flow solutions LOGO" width={400} height={200}/>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gold mb-6">
          Professional Plumbing & Home Solutions
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
          High-end residential & commercial plumbing, handyman, and whole home
          services in NW Georgia, Chattanooga & Dalton. 24/7 Emergency Service.
        </p>

        <div className="flex gap-4">
          <a
            href="tel:1234567890"
            className="bg-gold text-blackPrimary px-8 py-3 font-semibold rounded hover:bg-goldDark transition"
          >
            Call Now
          </a>

          <a
            href="#contact"
            className="border border-gold px-8 py-3 rounded text-gold hover:bg-gold hover:text-blackPrimary transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-black">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-gold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Plumbing Installations & Repairs",
            "Handyman Services",
            "Whole Home Renovations",
          ].map((service, index) => (
            <div
              key={index}
              className="border border-gold p-8 rounded-lg hover:bg-gold hover:text-blackPrimary transition"
            >
              <h3 className="font-semibold text-xl mb-4">{service}</h3>
              <p className="text-gray-400">
                Professional-grade work that exceeds competitors at better
                prices.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-blackPrimary text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold mb-8">
          Why Choose Us
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 space-y-4">
          <p>✔ High-End Craftsmanship</p>
          <p>✔ Competitive Pricing</p>
          <p>✔ Licensed & Insured</p>
          <p>✔ 24/7 Emergency Response</p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 bg-gold text-blackPrimary text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl mb-6">
          Request a Free Quote
        </h2>

        <p className="mb-6">
          Message us today for professional service you can trust.
        </p>

        <a
          href="tel:1234567890"
          className="bg-blackPrimary text-gold px-8 py-3 rounded font-semibold hover:opacity-90 transition"
        >
          Call 24/7 Now
        </a>
      </section>

    </main>
  );
}
