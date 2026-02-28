import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <div className="min-h-screen relative">
    <Header />
    <main className="pt-0">
      <Contact />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
