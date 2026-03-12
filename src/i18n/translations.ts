export type Language = "en" | "es" | "pt";

export interface Translations {
  // Navbar
  nav_home: string;
  nav_demos: string;
  nav_pricing: string;
  nav_how: string;
  nav_contact: string;
  nav_cta: string;

  // Hero
  hero_title: string;
  hero_subtitle: string;
  cta_primary: string;
  cta_secondary: string;

  // PerfectFor
  perfect_for_label: string;
  perfect_restaurants: string;
  perfect_cafes: string;
  perfect_bars: string;
  perfect_pizzerias: string;
  perfect_beach: string;
  perfect_microcopy: string;

  // Benefits
  benefits_title: string;
  benefit1_title: string;
  benefit1_desc: string;
  benefit2_title: string;
  benefit2_desc: string;
  benefit3_title: string;
  benefit3_desc: string;

  // Demos
  demos_title: string;
  demos_subtitle: string;
  demo1_title: string;
  demo1_usp: string;
  demo2_title: string;
  demo2_usp: string;
  demo3_title: string;
  demo3_usp: string;
  demo_cta: string;

  // Reassurance
  reassurance_title: string;
  reassurance_text: string;
  reassurance_feat1: string;
  reassurance_feat2: string;
  reassurance_feat3: string;
  reassurance_cta: string;

  // BuiltFor
  built_title: string;
  built_subtitle: string;
  built1_title: string;
  built1_desc: string;
  built2_title: string;
  built2_desc: string;
  built3_title: string;
  built3_desc: string;
  built4_title: string;
  built4_desc: string;

  // Pricing
  pricing_title: string;
  pricing_subtitle: string;
  pricing_tagline: string;
  plan_basic: string;
  plan_basic_desc: string;
  plan_basic_badge: string;
  plan_advanced: string;
  plan_advanced_desc: string;
  plan_advanced_badge: string;
  plan_premium: string;
  plan_premium_desc: string;
  pricing_cta_start: string;
  pricing_cta_demo: string;
  pricing_delivered: string;

  // HowItWorks
  how_title: string;
  how_step1: string;
  how_step1_desc: string;
  how_step2: string;
  how_step2_desc: string;
  how_step3: string;
  how_step3_desc: string;
  how_step4: string;
  how_step4_desc: string;

  // BeforeAfter
  ba_title: string;
  ba_without: string;
  ba_before1: string;
  ba_before2: string;
  ba_before3: string;
  ba_with: string;
  ba_after1: string;
  ba_after2: string;
  ba_after3: string;

  // Testimonial
  testimonial_title: string;
  testimonial_quote: string;
  testimonial_role: string;
  testimonial_location: string;

  // CallToAction
  cta_section_title: string;
  cta_section_text: string;
  cta_start: string;
  cta_whatsapp: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_delivery: string;
  contact_geo_title: string;
  contact_geo_text: string;
  contact_wa_title: string;
  contact_wa_text: string;
  contact_wa_link: string;
  field_restaurant: string;
  field_owner: string;
  field_phone: string;
  field_email: string;
  field_message: string;
  field_message_hint: string;
  form_send: string;

  // Footer
  footer_desc: string;
  footer_tagline: string;
  footer_links: string;
  footer_connect: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_demos: "Demos",
    nav_pricing: "Pricing",
    nav_how: "How It Works",
    nav_contact: "Contact",
    nav_cta: "Get My Restaurant Website",

    // Hero
    hero_title: "Get More Customers With a Professional Restaurant Website",
    hero_subtitle: "Show your menu, your location and allow customers to reserve tables easily.",
    cta_primary: "Get My Restaurant Website",
    cta_secondary: "View Demo Websites",

    // PerfectFor
    perfect_for_label: "Perfect for",
    perfect_restaurants: "Restaurants",
    perfect_cafes: "Cafés",
    perfect_bars: "Bars",
    perfect_pizzerias: "Pizzerias",
    perfect_beach: "Beach Spots",
    perfect_microcopy: "If you run any of the above, this website is built for you.",

    // Benefits
    benefits_title: "Why Every Restaurant Needs a Website",
    benefit1_title: "Be Found on Google",
    benefit1_desc: "When tourists and locals search for restaurants near them, your website helps you appear in Google results.",
    benefit2_title: "Show Your Menu",
    benefit2_desc: "Let customers browse your menu anytime, build appetite before they arrive and reduce phone inquiries.",
    benefit3_title: "Get More Reservations",
    benefit3_desc: "Allow customers to book a table directly via WhatsApp or a booking form without needing to call.",

    // Demos
    demos_title: "Choose a Website Style for Your Restaurant",
    demos_subtitle: "We'll adapt it to your brand, colors and menu.",
    demo1_title: "Elegant Restaurant",
    demo1_usp: "Perfect for fine dining & upscale cuisine",
    demo2_title: "Casual Restaurant",
    demo2_usp: "Ideal for bistros, cafés & family dining",
    demo3_title: "Modern Restaurant",
    demo3_usp: "Built for fusion cuisine & trendy spots",
    demo_cta: "View Demo",

    // Reassurance
    reassurance_title: "Your Restaurant, Your Style",
    reassurance_text: "We can adapt any design to match your restaurant's brand, colors and atmosphere. Every website we build is unique to your venue.",
    reassurance_feat1: "Custom colors for your brand",
    reassurance_feat2: "Menu and photos adapted to your restaurant",
    reassurance_feat3: "Fast delivery in just a few days",
    reassurance_cta: "Start My Restaurant Website",

    // BuiltFor
    built_title: "Built for Restaurant Owners",
    built_subtitle: "Everything your restaurant needs to attract more customers and bookings.",
    built1_title: "Menu Online",
    built1_desc: "Show your full menu on any device",
    built2_title: "WhatsApp Reservations",
    built2_desc: "One-tap reservations via WhatsApp",
    built3_title: "Google Maps",
    built3_desc: "Appear in local search & Maps",
    built4_title: "Mobile Friendly",
    built4_desc: "Fast and responsive for tourists on the go",

    // Pricing
    pricing_title: "Simple Pricing for Restaurants",
    pricing_subtitle: "Transparent pricing without hidden fees. Pay once, own it forever.",
    pricing_tagline: "Perfect for small restaurants, cafés and bars.",
    plan_basic: "Basic",
    plan_basic_desc: "The fastest way to get your restaurant online.",
    plan_basic_badge: "Delivered in 3–5 days",
    plan_advanced: "Advanced",
    plan_advanced_desc: "More pages, better SEO and brand presence.",
    plan_advanced_badge: "Most Popular",
    plan_premium: "Premium",
    plan_premium_desc: "Custom design, full SEO and priority support.",
    pricing_cta_start: "Get Started",
    pricing_cta_demo: "Book Demo",
    pricing_delivered: "⚡ Delivered in 3–5 days",

    // HowItWorks
    how_title: "How We Build Your Restaurant Website",
    how_step1: "Choose a design you like",
    how_step1_desc: "Browse our premium restaurant demos and select the style that best fits your brand's atmosphere.",
    how_step2: "Send us your menu, photos and information",
    how_step2_desc: "Provide your menu, food photos, location, and the background story of your restaurant.",
    how_step3: "We build your website in a few days",
    how_step3_desc: "Our team crafts your website in just a few days, making sure it looks stunning on mobile devices.",
    how_step4: "Your restaurant goes live online",
    how_step4_desc: "Your new website is launched, helping diners find you on Google, view the menu, and book tables easily.",

    // BeforeAfter
    ba_title: "From No Website to Professional Online Presence",
    ba_without: "Restaurant without website",
    ba_before1: "Customers can't find you on Google searches",
    ba_before2: "Menu is hidden, people don't know what to expect",
    ba_before3: "Hard to make reservations via phone",
    ba_with: "Restaurant with RestoSites",
    ba_after1: "Easy to find on Google and attract tourists",
    ba_after2: "Beautiful, readable menu visible anytime",
    ba_after3: "More reservations through WhatsApp & booking forms",

    // Testimonial
    testimonial_title: "Restaurant Owners Love Simple Websites",
    testimonial_quote: "RestoSites helped us get online fast. Tourists and locals can now find our restaurant on Google, see the menu and reserve via WhatsApp directly. The website paid for itself in the first week.",
    testimonial_role: "Owner – Búzios Grill",
    testimonial_location: "Búzios, Brazil",

    // CTA
    cta_section_title: "Ready to Get Your Restaurant Website?",
    cta_section_text: "Show your menu, location and attract more customers with a simple professional website.",
    cta_start: "Start My Website",
    cta_whatsapp: "Contact via WhatsApp",

    // Contact
    contact_title: "Start Your Restaurant Website Today",
    contact_subtitle: "Fill out the form to get started. We'll get back to you within 24 hours.",
    contact_delivery: "⚡ Most restaurant websites are ready in 3–5 days.",
    contact_geo_title: "🌍 We operate from Búzios, Brazil",
    contact_geo_text: "Local SEO & Google Maps setup included in all plans. We help your restaurant appear on Google locally and internationally.",
    contact_wa_title: "Prefer WhatsApp?",
    contact_wa_text: "Message us directly for a quick response.",
    contact_wa_link: "Message on WhatsApp",
    field_restaurant: "Restaurant Name",
    field_owner: "Owner Name",
    field_phone: "Phone / WhatsApp",
    field_email: "Email",
    field_message: "Message (Optional)",
    field_message_hint: "Tell us about your restaurant...",
    form_send: "Send Request",

    // Footer
    footer_desc: "We help restaurants create professional websites that help them appear on Google and attract more customers locally and internationally.",
    footer_tagline: "Made specifically for restaurants. Not generic business websites.",
    footer_links: "Quick Links",
    footer_connect: "Connect",
  },

  es: {
    // Navbar
    nav_home: "Inicio",
    nav_demos: "Demos",
    nav_pricing: "Precios",
    nav_how: "Cómo Funciona",
    nav_contact: "Contacto",
    nav_cta: "Quiero mi Web para Restaurante",

    // Hero
    hero_title: "Consigue Más Clientes con un Sitio Web Profesional para tu Restaurante",
    hero_subtitle: "Muestra tu menú, tu ubicación y permite a los clientes reservar mesas fácilmente.",
    cta_primary: "Quiero mi Web para Restaurante",
    cta_secondary: "Ver Webs de Ejemplo",

    // PerfectFor
    perfect_for_label: "Perfecto para",
    perfect_restaurants: "Restaurantes",
    perfect_cafes: "Cafeterías",
    perfect_bars: "Bares",
    perfect_pizzerias: "Pizzerías",
    perfect_beach: "Chiringuitos",
    perfect_microcopy: "Si tienes uno de los negocios anteriores, este sitio web es para ti.",

    // Benefits
    benefits_title: "Por Qué Todo Restaurante Necesita una Web",
    benefit1_title: "Aparecer en Google",
    benefit1_desc: "Cuando turistas y locales buscan restaurantes cerca, tu web te ayuda a aparecer en los resultados de Google.",
    benefit2_title: "Mostrar tu Menú",
    benefit2_desc: "Permite que los clientes vean tu menú en cualquier momento y lleguen con apetito antes de visitarte.",
    benefit3_title: "Más Reservas",
    benefit3_desc: "Permite a los clientes reservar mesa directamente por WhatsApp o formulario sin necesidad de llamar.",

    // Demos
    demos_title: "Elige el Estilo de Web para tu Restaurante",
    demos_subtitle: "Lo adaptamos a tu marca, colores y menú.",
    demo1_title: "Restaurante Elegante",
    demo1_usp: "Perfecto para alta cocina y restaurantes de lujo",
    demo2_title: "Restaurante Casual",
    demo2_usp: "Ideal para bistrós, cafeterías y restaurantes familiares",
    demo3_title: "Restaurante Moderno",
    demo3_usp: "Diseñado para cocina fusión y espacios trendy",
    demo_cta: "Ver Demo",

    // Reassurance
    reassurance_title: "Tu Restaurante, Tu Estilo",
    reassurance_text: "Podemos adaptar cualquier diseño para que encaje con la marca, colores y ambiente de tu restaurante. Cada web que creamos es única.",
    reassurance_feat1: "Colores personalizados para tu marca",
    reassurance_feat2: "Menú y fotos adaptados a tu restaurante",
    reassurance_feat3: "Entrega rápida en pocos días",
    reassurance_cta: "Empezar mi Web de Restaurante",

    // BuiltFor
    built_title: "Diseñado para Dueños de Restaurantes",
    built_subtitle: "Todo lo que tu restaurante necesita para atraer más clientes y reservas.",
    built1_title: "Menú Online",
    built1_desc: "Muestra tu menú completo en cualquier dispositivo",
    built2_title: "Reservas por WhatsApp",
    built2_desc: "Reservas con un toque a través de WhatsApp",
    built3_title: "Google Maps",
    built3_desc: "Aparece en búsquedas locales y en Maps",
    built4_title: "Optimizado para Móvil",
    built4_desc: "Rápido y responsive para turistas en movimiento",

    // Pricing
    pricing_title: "Precios Simples para Restaurantes",
    pricing_subtitle: "Precios transparentes sin costos ocultos. Pagas una vez, es tuyo para siempre.",
    pricing_tagline: "Perfecto para pequeños restaurantes, cafeterías y bares.",
    plan_basic: "Básico",
    plan_basic_desc: "La forma más rápida de poner tu restaurante en línea.",
    plan_basic_badge: "Entrega en 3–5 días",
    plan_advanced: "Avanzado",
    plan_advanced_desc: "Más páginas, mejor SEO y presencia de marca.",
    plan_advanced_badge: "Más Popular",
    plan_premium: "Premium",
    plan_premium_desc: "Diseño personalizado, SEO completo y soporte prioritario.",
    pricing_cta_start: "Comenzar",
    pricing_cta_demo: "Agendar Demo",
    pricing_delivered: "⚡ Entrega en 3–5 días",

    // HowItWorks
    how_title: "Cómo Creamos tu Web de Restaurante",
    how_step1: "Elige un diseño que te guste",
    how_step1_desc: "Explora nuestros demos premium y elige el estilo que mejor encaja con la atmósfera de tu marca.",
    how_step2: "Envíanos tu menú, fotos e información",
    how_step2_desc: "Comparte tu menú, fotos de comida, ubicación y la historia de tu restaurante.",
    how_step3: "Creamos tu web en pocos días",
    how_step3_desc: "Nuestro equipo construye tu web en pocos días, asegurándose de que se vea perfecta en móvil.",
    how_step4: "Tu restaurante sale en línea",
    how_step4_desc: "Tu nueva web está publicada, ayudando a los clientes a encontrarte en Google, ver el menú y reservar.",

    // BeforeAfter
    ba_title: "De No Tener Web a una Presencia Online Profesional",
    ba_without: "Restaurante sin web",
    ba_before1: "Los clientes no te encuentran en Google",
    ba_before2: "El menú está oculto, nadie sabe qué esperar",
    ba_before3: "Difícil hacer reservas por teléfono",
    ba_with: "Restaurante con RestoSites",
    ba_after1: "Fácil de encontrar en Google y atraer turistas",
    ba_after2: "Menú hermoso y legible visible en cualquier momento",
    ba_after3: "Más reservas através de WhatsApp y formularios",

    // Testimonial
    testimonial_title: "Dueños de Restaurantes Aman las Webs Simples",
    testimonial_quote: "RestoSites nos ayudó a estar en línea rápidamente. Turistas y locales ahora encuentran nuestro restaurante en Google, ven el menú y reservan por WhatsApp. La web se pagó sola en la primera semana.",
    testimonial_role: "Propietario – Búzios Grill",
    testimonial_location: "Búzios, Brasil",

    // CTA
    cta_section_title: "¿Listo para Tener tu Web de Restaurante?",
    cta_section_text: "Muestra tu menú, ubicación y atrae más clientes con un sitio web profesional y sencillo.",
    cta_start: "Empezar mi Web",
    cta_whatsapp: "Contactar por WhatsApp",

    // Contact
    contact_title: "Empieza tu Web de Restaurante Hoy",
    contact_subtitle: "Rellena el formulario para comenzar. Te respondemos en menos de 24 horas.",
    contact_delivery: "⚡ La mayoría de las webs de restaurante están listas en 3–5 días.",
    contact_geo_title: "🌍 Operamos desde Búzios, Brasil",
    contact_geo_text: "SEO local y configuración de Google Maps incluidos en todos los planes. Ayudamos a tu restaurante a aparecer en Google local e internacionalmente.",
    contact_wa_title: "¿Prefieres WhatsApp?",
    contact_wa_text: "Escríbenos directamente para una respuesta rápida.",
    contact_wa_link: "Escríbenos por WhatsApp",
    field_restaurant: "Nombre del Restaurante",
    field_owner: "Nombre del Propietario",
    field_phone: "Teléfono / WhatsApp",
    field_email: "Correo Electrónico",
    field_message: "Mensaje (Opcional)",
    field_message_hint: "Cuéntanos sobre tu restaurante...",
    form_send: "Enviar Solicitud",

    // Footer
    footer_desc: "Ayudamos a restaurantes a crear sitios web profesionales para aparecer en Google y atraer más clientes local e internacionalmente.",
    footer_tagline: "Hecho específicamente para restaurantes. No webs genéricas.",
    footer_links: "Accesos Rápidos",
    footer_connect: "Conectar",
  },

  pt: {
    // Navbar
    nav_home: "Início",
    nav_demos: "Demos",
    nav_pricing: "Preços",
    nav_how: "Como Funciona",
    nav_contact: "Contato",
    nav_cta: "Quero Meu Site para Restaurante",

    // Hero
    hero_title: "Consiga Mais Clientes com um Site Profissional para seu Restaurante",
    hero_subtitle: "Mostre seu menu, sua localização e permita que clientes reservem mesas facilmente.",
    cta_primary: "Quero Meu Site para Restaurante",
    cta_secondary: "Ver Sites de Exemplo",

    // PerfectFor
    perfect_for_label: "Perfeito para",
    perfect_restaurants: "Restaurantes",
    perfect_cafes: "Cafés",
    perfect_bars: "Bares",
    perfect_pizzerias: "Pizzarias",
    perfect_beach: "Quiosques de Praia",
    perfect_microcopy: "Se você tem um negócio acima, este site foi feito para você.",

    // Benefits
    benefits_title: "Por Que Todo Restaurante Precisa de um Site",
    benefit1_title: "Aparecer no Google",
    benefit1_desc: "Quando turistas e moradores buscam restaurantes perto, seu site ajuda a aparecer nos resultados do Google.",
    benefit2_title: "Mostrar seu Menu",
    benefit2_desc: "Permita que clientes vejam seu menu a qualquer hora e cheguem com fome antes de visitar.",
    benefit3_title: "Mais Reservas",
    benefit3_desc: "Permita que clientes reservem mesa via WhatsApp ou formulário sem precisar ligar.",

    // Demos
    demos_title: "Escolha um Estilo de Site para seu Restaurante",
    demos_subtitle: "Adaptamos à sua marca, cores e menu.",
    demo1_title: "Restaurante Elegante",
    demo1_usp: "Perfeito para alta gastronomia e culinária refinada",
    demo2_title: "Restaurante Casual",
    demo2_usp: "Ideal para bistrôs, cafés e restaurantes familiares",
    demo3_title: "Restaurante Moderno",
    demo3_usp: "Criado para cozinha fusion e espaços modernos",
    demo_cta: "Ver Demo",

    // Reassurance
    reassurance_title: "Seu Restaurante, Seu Estilo",
    reassurance_text: "Podemos adaptar qualquer design para combinar com a marca, cores e atmosfera do seu restaurante. Cada site que criamos é único.",
    reassurance_feat1: "Cores personalizadas para sua marca",
    reassurance_feat2: "Menu e fotos adaptados ao seu restaurante",
    reassurance_feat3: "Entrega rápida em poucos dias",
    reassurance_cta: "Começar Meu Site de Restaurante",

    // BuiltFor
    built_title: "Feito para Donos de Restaurantes",
    built_subtitle: "Tudo o que seu restaurante precisa para atrair mais clientes e reservas.",
    built1_title: "Menu Online",
    built1_desc: "Mostre seu menu completo em qualquer dispositivo",
    built2_title: "Reservas pelo WhatsApp",
    built2_desc: "Reservas com um toque pelo WhatsApp",
    built3_title: "Google Maps",
    built3_desc: "Apareça em buscas locais e no Maps",
    built4_title: "Mobile Friendly",
    built4_desc: "Rápido e responsivo para turistas em movimento",

    // Pricing
    pricing_title: "Preços Simples para Restaurantes",
    pricing_subtitle: "Preços transparentes sem taxas ocultas. Pague uma vez, é seu para sempre.",
    pricing_tagline: "Perfeito para pequenos restaurantes, cafés e bares.",
    plan_basic: "Básico",
    plan_basic_desc: "A forma mais rápida de colocar seu restaurante online.",
    plan_basic_badge: "Entrega em 3–5 dias",
    plan_advanced: "Avançado",
    plan_advanced_desc: "Mais páginas, melhor SEO e presença de marca.",
    plan_advanced_badge: "Mais Popular",
    plan_premium: "Premium",
    plan_premium_desc: "Design personalizado, SEO completo e suporte prioritário.",
    pricing_cta_start: "Começar",
    pricing_cta_demo: "Agendar Demo",
    pricing_delivered: "⚡ Entrega em 3–5 dias",

    // HowItWorks
    how_title: "Como Criamos seu Site de Restaurante",
    how_step1: "Escolha um design que você goste",
    how_step1_desc: "Navegue pelos nossos demos premium e escolha o estilo que melhor combina com sua marca.",
    how_step2: "Nos envie seu menu, fotos e informações",
    how_step2_desc: "Compartilhe seu menu, fotos de comida, localização e a história do seu restaurante.",
    how_step3: "Criamos seu site em poucos dias",
    how_step3_desc: "Nossa equipe cria seu site em poucos dias, garantindo que fique incrível no celular.",
    how_step4: "Seu restaurante vai ao ar online",
    how_step4_desc: "Seu novo site é lançado, ajudando clientes a te encontrar no Google, ver o menu e reservar.",

    // BeforeAfter
    ba_title: "De Nenhum Site a uma Presença Online Profissional",
    ba_without: "Restaurante sem site",
    ba_before1: "Clientes não te encontram no Google",
    ba_before2: "Menu escondido, as pessoas não sabem o que esperar",
    ba_before3: "Difícil fazer reservas por telefone",
    ba_with: "Restaurante com RestoSites",
    ba_after1: "Fácil de encontrar no Google e atrair turistas",
    ba_after2: "Menu bonito e legível visível a qualquer hora",
    ba_after3: "Mais reservas pelo WhatsApp e formulários",

    // Testimonial
    testimonial_title: "Donos de Restaurantes Amam Sites Simples",
    testimonial_quote: "A RestoSites nos ajudou a ficar online rápido. Turistas e moradores agora encontram nosso restaurante no Google, veem o menu e reservam pelo WhatsApp. O site se pagou na primeira semana.",
    testimonial_role: "Proprietário – Búzios Grill",
    testimonial_location: "Búzios, Brasil",

    // CTA
    cta_section_title: "Pronto para Ter seu Site de Restaurante?",
    cta_section_text: "Mostre seu menu, localização e atraia mais clientes com um site profissional e simples.",
    cta_start: "Começar Meu Site",
    cta_whatsapp: "Contato pelo WhatsApp",

    // Contact
    contact_title: "Comece seu Site de Restaurante Hoje",
    contact_subtitle: "Preencha o formulário para começar. Respondemos em até 24 horas.",
    contact_delivery: "⚡ A maioria dos sites de restaurante ficam prontos em 3–5 dias.",
    contact_geo_title: "🌍 Operamos de Búzios, Brasil",
    contact_geo_text: "SEO local e configuração do Google Maps incluídos em todos os planos. Ajudamos seu restaurante a aparecer no Google local e internacionalmente.",
    contact_wa_title: "Prefere WhatsApp?",
    contact_wa_text: "Mande mensagem diretamente para uma resposta rápida.",
    contact_wa_link: "Mensagem no WhatsApp",
    field_restaurant: "Nome do Restaurante",
    field_owner: "Nome do Proprietário",
    field_phone: "Telefone / WhatsApp",
    field_email: "E-mail",
    field_message: "Mensagem (Opcional)",
    field_message_hint: "Conte-nos sobre seu restaurante...",
    form_send: "Enviar Solicitação",

    // Footer
    footer_desc: "Ajudamos restaurantes a criar sites profissionais para aparecer no Google e atrair mais clientes local e internacionalmente.",
    footer_tagline: "Feito especificamente para restaurantes. Não sites genéricos.",
    footer_links: "Links Rápidos",
    footer_connect: "Conectar",
  },
};
