import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    description: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Submitting order:", formData);

      const { data, error } = await supabase.functions.invoke('send-telegram-order', {
        body: formData,
      });

      if (error) throw error;

      console.log("Order sent successfully:", data);

      toast({
        title: "Заявка отправлена!",
        description: "Я получил вашу заявку и свяжусь с вами в ближайшее время.",
      });

      // Reset form
      setFormData({
        name: "",
        contact: "",
        service: "",
        description: "",
        budget: "",
      });
    } catch (error: any) {
      console.error("Error sending order:", error);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Оставить заявку</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и я свяжусь с вами в ближайшее время
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Форма заявки</CardTitle>
              <CardDescription className="text-base">
                Расскажите о вашем проекте, и я предложу оптимальное решение
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Telegram или Email *</Label>
                  <Input
                    id="contact"
                    placeholder="@username или email@example.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Тип услуги *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roblox">Roblox Studio</SelectItem>
                      <SelectItem value="python">Python разработка</SelectItem>
                      <SelectItem value="minecraft">Minecraft плагины</SelectItem>
                      <SelectItem value="telegram">Telegram боты</SelectItem>
                      <SelectItem value="backend">Backend разработка</SelectItem>
                      <SelectItem value="web">Веб-дизайн</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите бюджет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">До 5,000₽</SelectItem>
                      <SelectItem value="15000">5,000₽ - 15,000₽</SelectItem>
                      <SelectItem value="30000">15,000₽ - 30,000₽</SelectItem>
                      <SelectItem value="30000+">Более 30,000₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание проекта *</Label>
                  <Textarea
                    id="description"
                    placeholder="Опишите подробно, что вам нужно..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                  <Send className="h-5 w-5" />
                  {isLoading ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
