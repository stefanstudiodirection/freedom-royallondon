import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

// Mock data
const articles = {
  '1': {
    id: '1',
    title: 'Why £1 Today Could Mean £1.60 Less Tomorrow',
    heroImage: '/placeholder.svg',
    date: '30 Oct 2025',
    readTime: '5 minute read',
    content: [
      {
        type: 'paragraph',
        content: "When you need money urgently, your pension might seem like an obvious solution. After all, it's your money, sitting there with a healthy balance. But accessing your pension before retirement age comes with hidden costs that aren't always obvious at first glance."
      },
      {
        type: 'paragraph',
        content: "In this guide, we'll break down exactly what happens when you access your pension early, and help you understand whether it's the right choice for your situation."
      },
      {
        type: 'heading2',
        content: 'Why Early Access Costs More Than You Think'
      },
      {
        type: 'paragraph',
        content: "Let's say you need £5,000 today and decide to take it from your pension. On the surface, it looks simple: your pension balance drops from £48,750 to £43,750. But the real cost is much higher."
      },
      {
        type: 'paragraph',
        content: "By retirement age (let's say 68), that £5,000 withdrawal could mean you have £8,200 less. How is this possible? The answer lies in compound interest."
      },
      {
        type: 'image',
        src: '/placeholder.svg',
        alt: 'Person using mobile phone'
      },
      {
        type: 'heading2',
        content: 'Understanding Compound Interest'
      },
      {
        type: 'paragraph',
        content: 'Compound interest is often called the "eighth wonder of the world" for good reason. It means your money doesn\'t just grow – it grows on its growth. Here\'s a simplified example:'
      },
      {
        type: 'list',
        items: [
          'Year 1: Your £5,000 grows by 5% = £5,250',
          'Year 2: That £5,250 grows by 5% = £5,512.50',
          'Year 3: That £5,512.50 grows by 5% = £5,788.13'
        ]
      },
      {
        type: 'paragraph',
        content: "And so on, for 33 years until retirement."
      },
      {
        type: 'paragraph',
        content: "Without withdrawal, that £5,000 could have grown to approximately £23,200. But because you withdrew it at age 35, you've given up all that growth."
      },
      {
        type: 'paragraph',
        content: "We use conservative estimates (typically 5% annual growth), but the principle remains: the longer money stays invested, the more it grows exponentially."
      }
    ]
  }
};

const LearnArticle: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const article = id ? articles[id as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F3F3F3] dark:bg-black text-foreground max-w-[480px] mx-auto p-4">
        <button 
          onClick={() => navigate('/learn')} 
          className="mb-6 hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <p className="text-[#716860]">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F3F3] dark:bg-black text-foreground">
      <div className="max-w-[480px] mx-auto">
        {/* Back Button */}
        <div className="p-4">
          <button 
            onClick={() => navigate('/learn')} 
            className="hover:opacity-70 transition-opacity"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Hero Image */}
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full aspect-[16/9] object-cover"
        />

        {/* Content */}
        <div className="p-4">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-[#716860] text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Rich Text Content */}
          <article className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'heading2':
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {block.content}
                    </h2>
                  );
                case 'paragraph':
                  return (
                    <p key={index} className="text-foreground mb-4 leading-relaxed">
                      {block.content}
                    </p>
                  );
                case 'image':
                  return (
                    <img
                      key={index}
                      src={block.src}
                      alt={block.alt}
                      className="w-full rounded-lg my-6"
                    />
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                      {block.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default LearnArticle;