import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LearningResourceCard } from '@/components/LearningResourceCard';

const mockArticles = [
  {
    id: '1',
    title: 'Why £1 Today Could Mean £1.60 Less Tomorrow',
    image: '/placeholder.svg'
  }
];

const Learn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3F3F3] dark:bg-black text-foreground max-w-[480px] mx-auto p-4">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-semibold mb-4">Learning Resources</h1>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {mockArticles.map((article) => (
          <LearningResourceCard
            key={article.id}
            title={article.title}
            image={article.image}
            onClick={() => navigate(`/learn/${article.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Learn;
