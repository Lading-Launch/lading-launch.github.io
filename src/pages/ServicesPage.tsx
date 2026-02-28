import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => (
  <div className="min-h-screen relative">
    <Header />
    <main className="pt-0">
      <Services />
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
