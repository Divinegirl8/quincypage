const Service = () => {
    const services = [
      {
        title: "Strategic Communication, Brand Messaging & Audience Insight",
        description:
        "I craft clear, persuasive messages that resonate deeply with the right audiences. By understanding what people value and respond to, I help brands and individuals communicate with clarity, authenticity, and emotional impact."
      },
      {
        title: "Professional Copywriting & Marketing Content Development",
        description:
        "I write attention-grabbing, action-driven copy for websites, ads, and campaigns that inspire audiences to engage, subscribe, or buy, turning ideas into measurable results for both businesses and personal brands."
      },
      {
        title: "Corporate & Creative Storytelling",
        description:
        "I transform facts, data, and ideas into powerful, human-centered stories that inform, inspire, and leave a lasting impression, whether for corporate brands, professionals, or creative projects."
      },
      {
        title: "Product & Service Positioning",
        description:
        "I strategically present products and services in ways that highlight their true value, emphasize what sets them apart, and connect with customers or audiences on both rational and emotional levels."
      },
      {
        title: "Editing, Proofreading & Quality Assurance",
        description:
        "I polish content to perfection by refining tone, clarity, grammar, and flow, ensuring every piece is professional, consistent, and aligned with the brand or individual’s authentic voice and purpose."
      },
      {
        title: "Ghostwriting (Fiction, Nonfiction, Business, Memoirs, Biographies, etc.) & Publishing Support",
        description:
        "I bring clients’ ideas and stories to life through expertly ghostwritten books, articles, and manuscripts that reflect their unique voice. I also provide publishing guidance, from structure and editing to final preparation for release."
      },
      {
        title: "Creative Ideation, Problem Solving & Brand Strategy",
        description:
        "I develop innovative ideas and strategic solutions that help brands and individuals grow, communicate effectively, and stand out in competitive spaces by blending creativity with purpose and direction"
      }
    ];
  
    return (
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 bg-white border border-black rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="font-semibold text-lg text-black mb-2">{service.title}</h2>
            <p className="text-gray-800 text-sm leading-relaxed "  style={{ textAlign: "justify" }}>{service.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Service;
  