import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection onReferNow={handleOpenModal} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;