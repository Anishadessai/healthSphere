import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import AppointmentCard, { Appointment } from '../components/AppointmentCard';
import Button from '../components/Button';
import { getMockAppointments } from '../data/mockData';

const Appointments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  
  useEffect(() => {
    const mockAppointments = getMockAppointments();
    setAppointments(mockAppointments);
  }, []);
  
  const upcomingAppointments = appointments.filter(
    app => ['confirmed', 'pending'].includes(app.status)
  );
  
  const pastAppointments = appointments.filter(
    app => ['completed', 'cancelled'].includes(app.status)
  );
  
  const displayedAppointments = activeTab === 'upcoming' 
    ? upcomingAppointments 
    : pastAppointments;

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Appointments</h1>
        <Button
          variant="primary"
          size="sm"
          icon={<Plus size={16} />}
        >
          New
        </Button>
      </div>
      
      <div className="flex mb-6">
        <button
          className={`flex-1 py-2 px-4 text-center rounded-full transition-colors ${
            activeTab === 'upcoming'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center rounded-full transition-colors ${
            activeTab === 'past'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>
      
      {displayedAppointments.length > 0 ? (
        <div>
          {displayedAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
            />
          ))}
        </div>
      ) : (
        <div className="card bg-gray-50 text-center py-8">
          <p className="text-gray-600 mb-3">
            {activeTab === 'upcoming'
              ? 'No upcoming appointments'
              : 'No past appointments'}
          </p>
          {activeTab === 'upcoming' && (
            <Button variant="primary">Schedule an Appointment</Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Appointments;