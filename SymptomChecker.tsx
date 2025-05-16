import React, { useState } from 'react';
import { Search, Info, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import SymptomItem from '../components/SymptomItem';

interface Symptom {
  id: string;
  name: string;
  category: string;
}

const symptomsData: Symptom[] = [
  { id: '1', name: 'Headache', category: 'Head & Face' },
  { id: '2', name: 'Dizziness', category: 'Head & Face' },
  { id: '3', name: 'Facial pain', category: 'Head & Face' },
  { id: '4', name: 'Chest pain', category: 'Chest & Heart' },
  { id: '5', name: 'Heart palpitations', category: 'Chest & Heart' },
  { id: '6', name: 'Shortness of breath', category: 'Chest & Heart' },
  { id: '7', name: 'Abdominal pain', category: 'Abdomen' },
  { id: '8', name: 'Nausea', category: 'Abdomen' },
  { id: '9', name: 'Joint pain', category: 'Muscles & Joints' },
  { id: '10', name: 'Muscle weakness', category: 'Muscles & Joints' },
];

const SymptomChecker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  const handleToggleSymptom = (symptomId: string) => {
    if (selectedSymptoms.includes(symptomId)) {
      setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptomId]);
    }
  };
  
  const filteredSymptoms = searchQuery
    ? symptomsData.filter(symptom => 
        symptom.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : symptomsData;
  
  const categorizedSymptoms = filteredSymptoms.reduce<Record<string, Symptom[]>>(
    (acc, symptom) => {
      if (!acc[symptom.category]) {
        acc[symptom.category] = [];
      }
      acc[symptom.category].push(symptom);
      return acc;
    },
    {}
  );
  
  const handleAnalyzeSymptoms = () => {
    setShowResult(true);
  };
  
  if (showResult) {
    return (
      <div className="max-w-screen-sm mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Analysis Results</h1>
        
        <div className="card mb-6">
          <h2 className="font-semibold text-lg mb-3">Possible Conditions</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tension Headache</p>
                <p className="text-sm text-gray-600">
                  Common match based on your symptoms
                </p>
              </div>
              <span className="badge bg-green-100 text-green-800">85% match</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Migraine</p>
                <p className="text-sm text-gray-600">
                  Possible match based on your symptoms
                </p>
              </div>
              <span className="badge bg-yellow-100 text-yellow-800">65% match</span>
            </li>
          </ul>
        </div>
        
        <div className="card mb-6">
          <h2 className="font-semibold text-lg mb-3">Recommended Specialists</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Neurologist</p>
                <p className="text-sm text-gray-600">
                  Specializes in headaches and neurological conditions
                </p>
              </div>
              <Button variant="outline" size="sm">Find</Button>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Primary Care</p>
                <p className="text-sm text-gray-600">
                  For initial evaluation and treatment
                </p>
              </div>
              <Button variant="outline" size="sm">Find</Button>
            </li>
          </ul>
        </div>
        
        <div className="card bg-blue-50 p-4 mb-6">
          <div className="flex items-start">
            <Info size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              This analysis is for informational purposes only and does not constitute medical advice. 
              Please consult with a healthcare professional for proper diagnosis and treatment.
            </p>
          </div>
        </div>
        
        <Button
          variant="primary"
          fullWidth
          onClick={() => setShowResult(false)}
        >
          Check Another Symptom
        </Button>
      </div>
    );
  }
  
  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Symptom Checker</h1>
      
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-gray-100 w-full pl-10 pr-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Search symptoms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {selectedSymptoms.length > 0 && (
        <div className="mb-6">
          <p className="font-medium mb-2">Selected Symptoms</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedSymptoms.map(id => {
              const symptom = symptomsData.find(s => s.id === id);
              return (
                <div 
                  key={id}
                  className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm flex items-center"
                >
                  {symptom?.name}
                  <button 
                    className="ml-2 text-green-600"
                    onClick={() => handleToggleSymptom(id)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
          <Button 
            variant="primary" 
            fullWidth
            onClick={handleAnalyzeSymptoms}
          >
            Analyze Symptoms
          </Button>
        </div>
      )}
      
      <div className="bg-green-50 rounded-lg p-4 mb-6 flex items-start">
        <Info size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-gray-800 mb-1">How it works</h3>
          <p className="text-sm text-gray-700">
            Select your symptoms and our AI will analyze them to suggest possible
            conditions and recommend specialists.
          </p>
        </div>
      </div>
      
      {Object.entries(categorizedSymptoms).map(([category, symptoms]) => (
        <div key={category} className="mb-6">
          <h2 className="font-semibold text-lg mb-3">{category}</h2>
          <div className="card">
            {symptoms.map(symptom => (
              <SymptomItem
                key={symptom.id}
                name={symptom.name}
                selected={selectedSymptoms.includes(symptom.id)}
                onToggle={() => handleToggleSymptom(symptom.id)}
              />
            ))}
          </div>
        </div>
      ))}
      
      {selectedSymptoms.length > 0 && (
        <div className="mb-6 sticky bottom-20 mt-4">
          <Button 
            variant="primary" 
            fullWidth
            onClick={handleAnalyzeSymptoms}
            icon={<ChevronRight size={20} />}
          >
            Analyze {selectedSymptoms.length} {selectedSymptoms.length === 1 ? 'Symptom' : 'Symptoms'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;