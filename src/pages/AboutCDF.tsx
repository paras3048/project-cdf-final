import React from 'react';

export default function AboutCDF() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold text-black text-center mb-12">About Connecting Dreams Foundation</h1>
      
      {/* Main Description */}
      <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mb-16">
        <p className="mb-6">
          Connecting Dreams Foundation (CDF) is a globally recognized, not-for-profit organization dedicated to transforming challenges into opportunities and creating sustainable solutions to real-world problems. Inspired by the United Nations' Sustainable Development Goals (SDGs), CDF empowers young changemakers to design and implement impactful projects that drive social and economic change.
        </p>
        <p className="mb-6">
          Founded with the vision of connecting communities to opportunities, CDF operates through a robust network of students, institutions, and organizations. It fosters innovation, collaboration, and empathy, enabling individuals to create scalable solutions that address pressing global issues such as poverty, education, gender inequality, and environmental sustainability.
        </p>
        <p className="mb-12">
          With chapters across educational institutions and a diverse array of projects, CDF serves as a catalyst for change, bridging gaps between resources and needs while cultivating a new generation of socially responsible leaders.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-black mb-8">Core Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Empathy</h3>
              <p className="text-gray-600">Understanding and addressing the needs of underserved communities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Innovation</h3>
              <p className="text-gray-600">Encouraging creative and sustainable solutions for real-world problems.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">Collaboration</h3>
              <p className="text-gray-600">Building partnerships to amplify social impact.</p>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="/images/about/1.jpg" 
            alt="Core Values"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}