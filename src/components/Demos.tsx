import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const demoImages = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1934",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2070",
];

export function Demos() {
  const { t } = useLanguage();

  const demos = [
    { title: t.demo1_title, usp: t.demo1_usp, image: demoImages[0], link: "/demo-elegante" },
    { title: t.demo2_title, usp: t.demo2_usp, image: demoImages[1], link: "/demo-casual" },
    { title: t.demo3_title, usp: t.demo3_usp, image: demoImages[2], link: "/demo-moderno" },
  ];

  return (
    <section className="py-24 bg-white" id="demos">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">
            {t.demos_title}
          </h2>
          <p className="text-lg text-charcoal-light">{t.demos_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              className="group rounded-2xl overflow-hidden bg-beige border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={demo.image} alt={`${demo.title} website design example`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">{demo.title}</h3>
                <p className="text-charcoal-light text-sm mb-6">{demo.usp}</p>
                {demo.link && demo.link.startsWith('/') ? (
                  <Link to={demo.link} className="inline-block px-6 py-3 w-full text-center bg-transparent border-2 border-charcoal text-charcoal font-semibold rounded-full hover:bg-charcoal hover:text-white transition-all">
                    {t.demo_cta}
                  </Link>
                ) : (
                  <a href={demo.link || "#contact"} className="inline-block px-6 py-3 w-full text-center bg-transparent border-2 border-charcoal text-charcoal font-semibold rounded-full hover:bg-charcoal hover:text-white transition-all">
                    {t.demo_cta}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
