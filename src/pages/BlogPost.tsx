import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import logo from "@/assets/lading_launch.svg";
import { ChevronLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Commerce for the Age Yet to Come",
    excerpt: "Step right up, good merchant, and lend an ear to the curious trade of Lading & Launch.",
    body: `Step right up, good merchant, and lend an ear to the curious trade of Lading & Launch. We are humble craftsmen of a most peculiar sort, dealing not only in timber and tar but in the wondrous shopfronts of a distant age yet to dawn. Our work is the shaping of custom Shopify stores and components, each built with the care of a seasoned shipwright and the imagination of a future mechanist.
    
    Whether you seek to outfit a brand new digital vessel or keep a long-sailing one in fine repair, our crew stands ready. We mend what needs mending, refine what needs refinement, and see that your store runs smooth across every tide. With Lading & Launch at your side, your commerce is prepared to rise, travel, and prosper across the wide and ever-growing seas of tomorrow.`,
    date: "November 24, 2025",
    category: "Getting Started",
    image: "/ship-at-port.webp"
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
                {post.body}
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
