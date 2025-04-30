const Service = () => {
    const services = [
      {
        title: "Persuasive Copywriting",
        description:
          "I craft compelling, results-driven copy that captivates readers and motivates them to take action—whether it’s making a purchase, signing up, or engaging with a brand.",
      },
      {
        title: "Website & Landing Page Copy",
        description:
          "I write clear, persuasive, and high-converting website and landing page copy that enhances brand identity, builds trust, and drives engagement or sales.",
      },
      {
        title: "Compelling Product Description Writing",
        description:
          "I transform product features into irresistible benefits with engaging, conversion-focused descriptions that highlight uniqueness and persuade customers to buy.",
      },
      {
        title: "Engaging Caption & Social Media Writing",
        description:
          "I create scroll-stopping, brand-aligned social media captions that spark engagement, drive interaction, and strengthen online presence.",
      },
      {
        title: "Book Endorsements & Reviews",
        description:
          "I provide insightful and persuasive book endorsements and reviews that highlight a book’s strengths, credibility, and appeal to its target audience.",
      },
      {
        title: "Professional Editing & Proofreading",
        description:
          "I refine content to perfection by eliminating errors, enhancing readability, and ensuring clarity, consistency, and a polished final product.",
      },
      {
        title: "Expert Dialogue Formatting",
        description:
          "I structure and refine dialogue for seamless readability, ensuring it flows naturally, follows industry standards, and enhances character authenticity.",
      },
      {
        title: "Narrative Crafting & Fiction Writing",
        description:
          "I develop compelling, immersive stories with strong character arcs, gripping plots, and emotionally resonant narratives that leave a lasting impact.",
      },
      {
        title: "High-Impact Ghostwriting",
        description:
          "I bring ideas to life by writing books, articles, and content that reflect the client’s voice, vision, and message—while maintaining complete confidentiality.",
      },
      {
        title: "Creative & Strategic Writing Solutions",
        description:
          "I blend creativity with strategy to craft writing that not only entertains and engages but also serves a clear purpose, whether in storytelling, branding, or content marketing.",
      },
      {
        title: "Creative Ideation & Brand Strategy",
        description:
          "I generate innovative content ideas and strategic solutions that help businesses and brands refine their messaging, strengthen their identity, and engage their audience effectively.",
      },
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
  