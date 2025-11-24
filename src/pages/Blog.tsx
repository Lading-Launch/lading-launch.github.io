import { Link } from "react-router-dom";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import logo from "@/assets/lading_launch.svg";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {/* Nautical Pagination */}
          <Pagination className="mb-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
