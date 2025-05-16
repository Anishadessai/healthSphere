import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import HealthTipCard from '../components/HealthTipCard';

interface HealthArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  image: string;
}

const healthArticles: HealthArticle[] = [
  {
    id: '1',
    title: 'Understanding Blood Pressure Readings',
    category: 'Heart Health',
    content: 'Blood pressure is a measure of the force of blood pushing against blood vessel walls. Learn what your numbers mean and how to maintain healthy levels.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'The Importance of Regular Exercise',
    category: 'Fitness',
    content: 'Regular physical activity is one of the most important things you can do for your health. Learn about the benefits and how to get started.',
    image: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Nutrition Basics: Building a Healthy Diet',
    category: 'Nutrition',
    content: 'Good nutrition is an important part of leading a healthy lifestyle. Learn about the guidelines for a balanced diet.',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Managing Stress and Mental Health',
    category: 'Mental Health',
    content: 'Stress affects your overall health. Discover effective strategies for managing stress and improving mental wellbeing.',
    image: 'https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    title: 'COVID-19: Understanding Vaccines',
    category: 'Infectious Diseases',
    content: 'Learn about how vaccines work, their effectiveness, and why they're important for public health.',
    image: 'https://images.pexels.com/photos/6497254/pexels-photo-6497254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '6',
    title: 'The Benefits of Quality Sleep',
    category: 'Wellness',
    content: 'Sleep plays a vital role in good health throughout your life. Learn about sleep hygiene and how to improve your rest.',
    image: 'https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const HealthAwareness: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory(null);
  };
  
  const categories = Array.from(
    new Set(healthArticles.map(article => article.category))
  );
  
  const filteredArticles = healthArticles.filter(article => {
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = !activeCategory || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (selectedArticle) {
    return (
      <div className="max-w-screen-sm mx-auto p-4">
        <button 
          className="mb-4 text-primary-500 font-medium"
          onClick={() => setSelectedArticle(null)}
        >
          ← Back to Health Articles
        </button>
        
        <div className="mb-6 rounded-xl overflow-hidden h-48">
          <img 
            src={selectedArticle.image} 
            alt={selectedArticle.title}
            className="w-full h-full object-cover" 
          />
        </div>
        
        <span className="badge bg-blue-100 text-blue-800 mb-2">
          {selectedArticle.category}
        </span>
        
        <h1 className="text-2xl font-bold mb-4">{selectedArticle.title}</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            {selectedArticle.content}
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-6">Why This Matters</h2>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">Important point about {selectedArticle.title.toLowerCase()}</li>
            <li className="mb-2">Ways to improve your health in this area</li>
            <li className="mb-2">When to consult with a healthcare professional</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2 mt-6">Next Steps</h2>
          <p>
            Consult with your healthcare provider for personalized advice related to {selectedArticle.category.toLowerCase()}. Regular check-ups and screenings are important for maintaining good health.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Health Awareness</h1>
      
      <SearchBar
        placeholder="Search health topics..."
        onSearch={handleSearch}
        className="mb-6"
      />
      
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
        <button
          className={`py-1 px-3 rounded-full text-sm whitespace-nowrap ${
            activeCategory === null
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        
        {categories.map(category => (
          <button
            key={category}
            className={`py-1 px-3 rounded-full text-sm whitespace-nowrap ${
              activeCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map(article => (
            <HealthTipCard
              key={article.id}
              title={article.title}
              content={article.content}
              image={article.image}
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      ) : (
        <div className="card bg-gray-50 text-center py-8">
          <p className="text-gray-600">No health articles found</p>
          {searchQuery && (
            <button
              className="mt-2 text-primary-500 font-medium"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(null);
              }}
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthAwareness;