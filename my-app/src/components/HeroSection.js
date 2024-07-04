import React from 'react';

function HeroSection({ onReferNow }) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Refer & Earn</h2>
        <p className="text-xl text-gray-600 mb-8">
          Refer your friends and earn amazing rewards!
        </p>
        <button
          onClick={onReferNow}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Refer Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;