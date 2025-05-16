import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Shield, MessageSquare, ChevronRight, MapPin, Bell } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import { Appointment } from '../components/AppointmentCard';
import { getMockAppointments } from '../data/mockData';

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  
  useEffect(() => {
    const upcomingAppointments = getMockAppointments().slice(0, 2);
    setAppointments(upcomingAppointments);
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-600">Good morning,</p>
          <h1 className="text-2xl font-bold">{user?.name || 'User'}</h1>
        </div>
        <button className="p-2 bg-gray-100 rounded-full">
          <Bell size={20} className="text-gray-600" />
        </button>
      </div>
      
      <SearchBar
        placeholder="Search for doctors, symptoms..."
        className="mb-4"
      />
      
      {user?.location && (
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <MapPin size={16} className="text-primary-500 mr-1" />
          <span>{user.location}</span>
        </div>
      )}
      
      <Button 
        variant="primary" 
        fullWidth 
        icon={<Calendar size={18} />}
        className="mb-6"
        onClick={() => navigate('/appointments')}
      >
        Schedule Appointment
      </Button>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div 
          className="card bg-green-50 hover:bg-green-100 transition-colors cursor-pointer"
          onClick={() => navigate('/symptoms')}
        >
          <div className="flex flex-col items-center p-4">
            <Shield size={24} className="text-primary-500 mb-2" />
            <span className="text-center font-medium">Symptom Checker</span>
          </div>
        </div>
        
        <div 
          className="card bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer relative"
          onClick={() => navigate('/health')}
        >
          <span className="absolute top-2 right-2 badge bg-green-500 text-white text-xs">BETA</span>
          <div className="flex flex-col items-center p-4">
            <MessageSquare size={24} className="text-blue-500 mb-2" />
            <span className="text-center font-medium">AI Assistance</span>
          </div>
        </div>
      </div>
      
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
        <button 
          className="text-primary-500 text-sm font-medium flex items-center"
          onClick={() => navigate('/appointments')}
        >
          See all <ChevronRight size={16} />
        </button>
      </div>
      
      {appointments.length > 0 ? (
        <div>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="card mb-4">
              <div className="flex">
                <div className="bg-green-100 rounded-lg p-2 mr-4 text-center min-w-16">
                  <div className="text-sm font-medium text-gray-600">
                    {new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    {new Date(appointment.date).getDate()}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold">{appointment.doctor.name}</h3>
                  <p className="text-sm text-gray-600">{appointment.doctor.specialty}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-800 font-medium">{appointment.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{appointment.location}</p>
                </div>
              </div>
              
              <div className="mt-3 text-right">
                <button 
                  className="text-primary-500 text-sm font-medium"
                  onClick={() => navigate('/appointments')}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card bg-gray-50 text-center py-6">
          <p className="text-gray-600">No upcoming appointments</p>
          <Button 
            variant="primary" 
            size="sm" 
            className="mt-2"
            onClick={() => navigate('/appointments')}
          >
            Schedule Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;