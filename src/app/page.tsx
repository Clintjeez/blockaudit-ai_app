'use client';
import ContractInput from '@/components/ContractInput';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [contract, setContract] = useState('');
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {};

  return (
    <main>
      <Navbar />
      <Hero />
      <ContractInput
        analyze={analyze}
        contract={contract}
        setContract={setContract}
      />
    </main>
  );
}
