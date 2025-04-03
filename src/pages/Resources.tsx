import React from 'react';

const resourceItems = [
  {
    image: "/images/resources/1.jpg",
    title: "Cognitive Science Labs Database",
    link: "https://erratic-forgery-cfc.notion.site/144bc6c4752580c2a3f3d72c28f37791?v=144bc6c47525812bac73000c764b3d25&pvs=4"
  },
  {
    image: "/images/resources/2.jpg",
    title: "Podcasts",
    link: "https://erratic-forgery-cfc.notion.site/143bc6c475258074a0fdf006515d1589?v=144bc6c475258186b1a3000cf0dc82e2&pvs=74"
  },
  {
    image: "/images/resources/3.jpg",
    title: "Parliament of India",
    link: "https://pine-torta-f08.notion.site/1417d6434fdd808f811de1a0afcbba6c?v=1417d6434fdd818a962d000cf1f002b9&pvs=74"
  },
  {
    image: "/images/resources/4.jpg",
    title: "Toolkit",
    link: "https://erratic-forgery-cfc.notion.site/144bc6c4752580638e60fe654621476d?v=144bc6c4752581bf9f98000c26af42a3&pvs=74"
  },
  {
    image: "/images/resources/5.png",
    title: "Invest India",
    link: "https://erratic-forgery-cfc.notion.site/161bc6c47525806e921bdf684af5923e?v=161bc6c475258196a4be000c27e64e9a"
  },
  {
    image: "/images/resources/6.png",
    title: "Niti Aayog",
    link: "https://erratic-forgery-cfc.notion.site/161bc6c47525801e9198ef39bf3fd048?v=161bc6c475258154b30c000cfe56fcd3&pvs=4"
  }
];

export default function Resources() {
  return (
    <div className="container mx-auto px-8 py-16 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-12">Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {resourceItems.map((item, index) => (
            <div key={index} className="group">
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
              {/* Centered Title */}
              <h3 className="font-['Times_New_Roman'] text-xl font-semibold text-black mb-2 text-center">
                {item.title}
              </h3>
              {/* Centered Description */}
              <p className="font-['Times_New_Roman'] text-gray-600 text-center">
              </p>
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
