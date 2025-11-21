import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import logo from "@/assets/lading_launch.svg";

const blogPosts = [
  {
    id: 1,
    title: "Setting Sail with Shopify: A Merchant's Guide",
    excerpt: "Embark on your eCommerce journey with our comprehensive guide to launching your first Shopify store.",
    date: "March 15, 2024",
    category: "Getting Started",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    id: 2,
    title: "Navigating the Waters of Shopify Plus",
    excerpt: "Discover when it's time to upgrade to Shopify Plus and what benefits await your growing enterprise.",
    date: "March 10, 2024",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    id: 3,
    title: "Anchoring Your Brand: Design Best Practices",
    excerpt: "Learn the timeless principles of eCommerce design that convert visitors into loyal customers.",
    date: "March 5, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 4,
    title: "Charting Performance: Speed Optimization Tips",
    excerpt: "Navigate the technical seas of site performance with our expert optimization strategies.",
    date: "February 28, 2024",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 5,
    title: "Harbor Security: Protecting Your Store",
    excerpt: "Safeguard your Shopify store from digital pirates with these essential security measures.",
    date: "February 20, 2024",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 6,
    title: "The Merchant's Log: SEO for Shopify",
    excerpt: "Chart a course to better search rankings with proven SEO strategies for your Shopify store.",
    date: "February 15, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-brass/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Lading & Launch" className="h-12 w-auto" />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground/80 hover:text-brass transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-brass font-semibold">
                Captain's Log
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-anchor-dark/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Captain's Log
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Navigate the seas of eCommerce with insights from our experienced crew. 
              Charting courses through Shopify development, design, and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
