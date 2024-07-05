import React, { useState } from 'react';
import ReferralModal from './components/ReferralModal';
import Header from './components/Header';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    
      
    <h1 className="text-4xl font-bold mb-8">Refer & Earn</h1>
    <button 
      onClick={openModal}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Refer Now
    </button>
    <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
  </div>
    </>
  );
}

export default App;
