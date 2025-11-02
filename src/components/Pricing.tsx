import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const plans = [
  {
    name: "Базовый",
    price: "5,000₽",
    description: "Идеально для небольших проектов",
    features: [
      "Простой скрипт/плагин",
      "Базовая документация",
      "1 неделя поддержки",
      "Исходный код",
    ],
    popular: false,
  },
  {
    name: "Профессиональный",
    price: "15,000₽",
    description: "Для серьезных проектов",
    features: [
      "Сложный функционал",
      "Полная документация",
      "1 месяц поддержки",
      "Исходный код + обновления",
      "Консультации",
    ],
    popular: true,
  },
  {
    name: "Премиум",
    price: "30,000₽+",
    description: "Комплексные решения",
    features: [
      "Полная разработка проекта",
      "Подробная документация",
      "3 месяца поддержки",
      "Исходный код + обновления",
      "Приоритетная поддержка",
      "Обучение",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Покупки и Цены</h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий пакет для вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
