import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => (
  <div className="min-h-screen relative">
    <Header />
    <main className="pt-0">
      <About />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
