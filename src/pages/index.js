import Head from 'next/head';
import Header from '../components/Header';
import AuthModal from '../components/AuthModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>LD Garage</title>
        <meta name="description" content="LD Garage - Your trusted automotive service provider." />
      </Head>

      <Header onLoginClick={handleLoginClick} />

      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </>
  );
}
