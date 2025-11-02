import { Code2, ShoppingCart, Send } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              Арсен
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Технологии
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Покупки
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="gap-2">
              <Send className="h-4 w-4" />
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
