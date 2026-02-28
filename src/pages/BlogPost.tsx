import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

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
      <Header />

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
              {post.body
                .split(/\n\n+/)
                .filter((p) => p.trim())
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-xl text-foreground/80 leading-relaxed mb-6"
                        : "text-foreground/80 leading-relaxed mb-6"
                    }
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
