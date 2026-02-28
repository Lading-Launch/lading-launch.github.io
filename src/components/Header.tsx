import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "@/assets/lading_launch_hero.webp";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Captain's Log" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-brass font-semibold" : "text-foreground/80 hover:text-brass transition-colors";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-brass/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-3 font-bold text-xl text-brass">
              <img src={logo} alt="Lading & Launch" className="h-12 w-auto" />
            </NavLink>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-6 pt-8">
                  {navLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        `text-lg ${isActive ? "text-brass font-semibold" : "text-foreground/80 hover:text-brass"}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
