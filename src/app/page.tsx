'use client';
import ContractInput from '@/components/ContractInput';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ResultModal from '@/components/ResultModal';
import { analyzeContract } from '@/utils/ai-prompts';
import { useState } from 'react';

export default function Home() {
  const [contract, setContract] = useState('');
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setIsModalOpen(true);
    await analyzeContract(contract, setResults, setLoading);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <ContractInput
        analyze={analyze}
        contract={contract}
        setContract={setContract}
      />
      <ResultModal
        closeModal={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        results={results}
        loading={loading}
        fixIssues={() => {}}
      />
    </main>
  );
}
