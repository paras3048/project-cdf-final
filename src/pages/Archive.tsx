import React from 'react';

const archiveItems = [
  {
    image: "/images/archive/1.png",
    title: "India’s Low-Carbon Transition",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_indias-low-carbon-transition-activity-7265087240874139648-8izS"
  },
  {
    image: "/images/archive/2.png",
    title: "India’s Growth Imperative Vision",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_indias-growth-imperative-vision-activity-7265088010306629632-8nf4"
  },
  {
    image: "/images/archive/3.png",
    title: "Cognitive Science behind Farmer sucides",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_cognitive-science-behind-farmer-suicides-activity-7265089102213971968-U2EW"
  },
  {
    image: "/images/archive/4.png",
    title: "The Silent Truth Public Perception of Abortion in India",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_the-silent-truth-public-perception-of-abortion-activity-7265089844442259458-6UTz"
  },
  {
    image: "/images/archive/9.png",
    title: "Impact Investing (Comic)",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_impact-investing-activity-7265090756967579648-CEe3"
  },
  {
    image: "/images/archive/5.png",
    title: "Education & India",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_education-india-activity-7265091220404604929-07uj"
  },
  {
    image: "/images/archive/6.png",
    title: "Gender Dysphoria (Comic)",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_gender-dysphoria-activity-7265089393147674627-D9Ny"
  },
  {
    image: "/images/archive/7.png",
    title: "Carbon Footprints of Delhi (Comic)",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_carbon-footprint-of-delhi-activity-7265087641493073920-yIcT"
  },
  {
    image: "/images/archive/8.png",
    title: "Inclusive Finance (Comic)",
    link: "https://www.linkedin.com/posts/connecting-dreams-foundation-mac-chapter_inclusive-finance-activity-7265088493792432128-yhUv"
  }
];

export default function Archive() {
  return (
    <div className="container mx-auto px-8 py-16 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-12">Archive</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {archiveItems.map((item, index) => (
            <div key={index} className="group text-center"> {/* Center align everything */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
              </a>
              <h3 className="font-['Times_New_Roman'] text-xl font-semibold text-black mb-2">{item.title}</h3>
            </div>
          ))}
          {/* Empty slots for future uploads - 5 more rows of 4 images each */}
          {[...Array(0)].map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
