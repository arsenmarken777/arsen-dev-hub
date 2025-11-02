import { Code2, Gamepad2, Server, Blocks, Bot, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Gamepad2,
    title: "Roblox Studio",
    description: "Разработка игр и скриптов на Lua для платформы Roblox",
    color: "text-red-500",
  },
  {
    icon: Code2,
    title: "Python",
    description: "Программирование на Python: боты, автоматизация, анализ данных",
    color: "text-blue-500",
  },
  {
    icon: Blocks,
    title: "Minecraft",
    description: "Плагины и моды для серверов Minecraft, настройка и оптимизация",
    color: "text-green-500",
  },
  {
    icon: Bot,
    title: "Telegram Боты",
    description: "Создание ботов для Telegram с различным функционалом",
    color: "text-cyan-500",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Разработка серверной части и API для ваших проектов",
    color: "text-purple-500",
  },
  {
    icon: Palette,
    title: "Веб-дизайн",
    description: "Создание современных веб-сайтов и интерфейсов",
    color: "text-pink-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Услуги и Направления</h2>
          <p className="text-lg text-muted-foreground">
            Предлагаю профессиональную разработку в различных областях программирования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 backdrop-blur-sm bg-card/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
