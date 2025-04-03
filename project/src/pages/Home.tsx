import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import { Check, Quote } from 'lucide-react';

export default function Home() {
  const galleryImages = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
    "/images/gallery/7.png",
    "/images/gallery/8.png",
    "/images/gallery/9.png",
    "/images/gallery/10.png",
    "/images/gallery/11.png",
    "/images/gallery/12.png",
    "/images/gallery/13.png",
    "/images/gallery/14.png",
    "/images/gallery/15.png",
    "/images/gallery/16.png",
    "/images/gallery/17.png",
    "/images/gallery/18.png"
  ];

  return (
    <div className="w-full">
      <div className="w-full h-screen">
        <Slideshow />
      </div>
      
      {/* Welcome Section */}
      <div className="text-center py-20 px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">WELCOME TO CDF MAC CHAPTER</h1>
          <p className="text-xl text-gray-600 mb-8">Empowering Change, One Dream at a Time</p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-gray-600 text-lg leading-relaxed text-left">
                At the Connecting Dreams Foundation (CDF), Maharaja Agrasen College Chapter, we believe in transforming lives through sustainable development, innovation, and the power of young minds. We are committed to bridging the gap between challenges and solutions, enabling communities to achieve their dreams while creating opportunities for students to make a lasting impact.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/home/1.jpg"
                alt="Students collaborating"
                className="rounded-lg shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="w-full px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black mb-8">Who We Are</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Connecting Dreams Foundation (CDF) is a global network of changemakers driven by the United Nations' Sustainable Development Goals (SDGs). Our chapter at Maharaja Agrasen College is dedicated to empowering students to become leaders of social change by:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">Identifying real-world problems.</p>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">Creating sustainable and scalable solutions.</p>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">Collaborating with communities to implement impactful projects.</p>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="/images/home/2.jpg" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="w-full px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-black mb-8">What We Do</h2>
              <p className="text-gray-600 mb-8 text-lg">At CDF Maharaja Agrasen College Chapter, we focus on:</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Research and Evaluation</h3>
                    <p className="text-gray-600 text-lg">Data-driven insights, impact tracking.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Community and Organizational Engagement</h3>
                    <p className="text-gray-600 text-lg">CSR initiatives, academic partnerships, and skill development.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="text-gray-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Content and Education</h3>
                    <p className="text-gray-600 text-lg">Educational resources and engaging content for community growth and awareness.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="/images/home/3.JPG" 
                alt="What we do" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group aspect-square">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full px-8 py-20 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-12 text-center relative">
            <Quote className="text-gray-400 w-16 h-16 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl text-black font-medium mb-12 italic">
              "Innovation distinguishes between a leader and a follower. We strive to lead the way in sustainable development."
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <Link to="/">
                <img 
                  src="/images/logo/1.png"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </Link>
              <div className="text-left">
                <p className="font-semibold text-black text-xl">Siddhant</p>
                <p className="text-gray-600 text-lg">Chapter President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}