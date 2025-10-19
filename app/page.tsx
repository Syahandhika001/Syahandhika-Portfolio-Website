import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Experience />

        {/* Contact Section */}
        <section
          id="contact"
          className="section container-custom min-h-screen flex items-center"
        >
          <div>
            <h2 className="gradient-text mb-4">Get In Touch</h2>
            <p className="text-gray-400 dark:text-gray-400 mb-8 max-w-2xl">
              Contact form coming soon...
            </p>
            <button className="btn btn-primary">Send Message</button>
          </div>
        </section>
      </main>
    </>
  );
}