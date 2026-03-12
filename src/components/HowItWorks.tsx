import { useLanguage } from "../context/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t.how_step1,
      description: t.how_step1_desc,
    },
    {
      step: "02",
      title: t.how_step2,
      description: t.how_step2_desc,
    },
    {
      step: "03",
      title: t.how_step3,
      description: t.how_step3_desc,
    },
    {
      step: "04",
      title: t.how_step4,
      description: t.how_step4_desc,
    },
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">
            {t.how_title}
          </h2>
          <div className="w-24 h-1 bg-olive mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-beige-dark -z-10" />

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-0">
              <div className="w-20 h-20 bg-charcoal text-white rounded-full flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-xl border-4 border-white">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-[250px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
