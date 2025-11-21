import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const BlogCard = ({ id, title, excerpt, date, category, image }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-brass/20 bg-card group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anchor-dark/80 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-brass text-anchor-dark border-0">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-brass transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 leading-relaxed">
          {excerpt}
        </p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default BlogCard;
