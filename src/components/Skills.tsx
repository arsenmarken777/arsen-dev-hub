import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    category: "Игровая разработка",
    skills: ["Roblox Studio", "Lua", "Minecraft", "Unity", "Game Design"],
    gradient: "from-red-500/10 to-orange-500/10",
  },
  {
    category: "Программирование",
    skills: ["Python", "JavaScript", "TypeScript", "Node.js", "React"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    category: "Backend & Боты",
    skills: ["Telegram Bots", "Discord Bots", "API", "Databases", "Supabase"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Технологии</h2>
          <p className="text-lg text-muted-foreground">
            Работаю с современным стеком технологий для создания качественных решений
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-gradient-to-br ${category.gradient} backdrop-blur-sm`}
            >
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
