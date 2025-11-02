import { Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Contact = () => {
  const telegramUsername = "arsen_dev"; // Замените на реальный username

  const handleTelegramClick = () => {
    window.open(`https://t.me/${telegramUsername}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Связаться со мной</h2>
            <p className="text-lg text-muted-foreground">
              Готов обсудить ваш проект и ответить на вопросы
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Telegram Bot для заявок</CardTitle>
              <CardDescription className="text-base">
                Напишите мне в Telegram, чтобы обсудить ваш проект. Отвечаю быстро!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Username</span>
                    <span className="font-mono text-primary">@{telegramUsername}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Время ответа</span>
                    <span className="text-foreground">~1 час</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Доступность</span>
                    <span className="text-green-500 font-medium">● Онлайн</span>
                  </div>
                </div>
              </div>

              <Button onClick={handleTelegramClick} size="lg" className="w-full gap-2">
                <Send className="h-5 w-5" />
                Открыть Telegram
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Расскажите о своем проекте, и я предложу оптимальное решение
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
