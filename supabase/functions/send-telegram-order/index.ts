import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OrderRequest {
  name: string;
  contact: string;
  service: string;
  description: string;
  budget: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderRequest = await req.json();
    console.log('Received order:', orderData);

    // Format message for Telegram
    const message = `
🔔 <b>Новая заявка!</b>

👤 <b>Имя:</b> ${orderData.name}
📱 <b>Контакт:</b> ${orderData.contact}
💼 <b>Услуга:</b> ${orderData.service}
💰 <b>Бюджет:</b> ${orderData.budget}

📝 <b>Описание проекта:</b>
${orderData.description}
    `.trim();

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const telegramData = await telegramResponse.json();
    console.log('Telegram API response:', telegramData);

    if (!telegramData.ok) {
      throw new Error(`Telegram API error: ${telegramData.description}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Order sent successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in send-telegram-order function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
