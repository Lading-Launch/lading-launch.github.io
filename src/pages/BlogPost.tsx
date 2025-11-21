import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import logo from "@/assets/lading_launch.svg";
import { ChevronLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Setting Sail with Shopify: A Merchant's Guide",
    excerpt: "Embark on your eCommerce journey with our comprehensive guide to launching your first Shopify store.",
    content: "Starting your Shopify journey is like preparing a vessel for its maiden voyage. You need the right provisions, a skilled crew, and a clear destination. In this comprehensive guide, we'll walk you through every step of launching your first Shopify store, from choosing your products to setting sail into the vast ocean of eCommerce...",
    date: "March 15, 2024",
    category: "Getting Started",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
  },
  {
    id: 2,
    title: "Navigating the Waters of Shopify Plus",
    excerpt: "Discover when it's time to upgrade to Shopify Plus and what benefits await your growing enterprise.",
    content: "As your merchant vessel grows and your cargo expands, you may find yourself needing a larger ship. Shopify Plus is the enterprise solution designed for high-volume merchants ready to scale their operations. Learn when the time is right to upgrade and what treasures await...",
    date: "March 10, 2024",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    id: 3,
    title: "Anchoring Your Brand: Design Best Practices",
    excerpt: "Learn the timeless principles of eCommerce design that convert visitors into loyal customers.",
    content: "Just as a ship's figurehead represents its identity, your brand design anchors your store's presence in the market. Discover the timeless principles that create memorable, converting experiences for your customers...",
    date: "March 5, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  },
  {
    id: 4,
    title: "Charting Performance: Speed Optimization Tips",
    excerpt: "Navigate the technical seas of site performance with our expert optimization strategies.",
    content: "A swift vessel catches the trade winds and reaches port before the competition. Learn how to optimize your Shopify store's performance to ensure your customers enjoy smooth sailing through your checkout process...",
    date: "February 28, 2024",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 5,
    title: "Harbor Security: Protecting Your Store",
    excerpt: "Safeguard your Shopify store from digital pirates with these essential security measures.",
    content: "Every captain knows the importance of protecting their cargo from pirates. In the digital age, securing your eCommerce store requires vigilance and the right defenses. We'll show you how to fortify your Shopify harbor...",
    date: "February 20, 2024",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 6,
    title: "The Merchant's Log: SEO for Shopify",
    excerpt: "Chart a course to better search rankings with proven SEO strategies for your Shopify store.",
    content: "Like a lighthouse guiding ships to shore, SEO guides customers to your store. Master the art of search engine optimization and ensure your Shopify store is visible in the vast ocean of online commerce...",
    date: "February 15, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Return to Captain's Log</Button>
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anchor-dark via-anchor-dark/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <Badge className="mb-4 bg-brass text-anchor-dark border-0">
                {post.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-background mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-background/90">{post.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Captain's Log
              </Button>
            </Link>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <p className="text-foreground/70 leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
