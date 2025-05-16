import React from 'react';
import { ChevronRight, Clock } from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface Appointment {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  location: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

interface AppointmentCardProps {
  appointment: Appointment;
  onClick?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onClick }) => {
  const { doctor, date, time, location, status } = appointment;
  
  const statusBadge = {
    confirmed: <span className="badge badge-success">Confirmed</span>,
    pending: <span className="badge badge-warning">Pending</span>,
    completed: <span className="badge bg-blue-100 text-blue-800">Completed</span>,
    cancelled: <span className="badge bg-red-100 text-red-800">Cancelled</span>,
  };

  return (
    <div className="card mb-4 hover:shadow-card-hover transition-shadow" onClick={onClick}>
      <div className="flex items-start">
        <div className="mr-4">
          <div className="bg-gray-200 rounded-full w-12 h-12 overflow-hidden">
            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            {statusBadge[status]}
          </div>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Clock size={14} className="mr-1" />
            <span>{time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{location}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
        <button className="text-primary-500 flex items-center text-sm font-medium">
          View Details <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;