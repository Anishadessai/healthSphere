import { Appointment } from '../components/AppointmentCard';

export const getMockAppointments = (): Appointment[] => {
  return [
    {
      id: '1',
      doctor: {
        id: 'd1',
        name: 'Dr. Emily Chen',
        specialty: 'Cardiology',
        image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      date: '2025-06-10',
      time: '10:00 AM',
      location: 'Heart Care Center, Bldg A, Room 302',
      status: 'confirmed'
    },
    {
      id: '2',
      doctor: {
        id: 'd2',
        name: 'Dr. Michael Johnson',
        specialty: 'Dermatology',
        image: 'https://images.pexels.com/photos/5214956/pexels-photo-5214956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      date: '2025-06-15',
      time: '2:30 PM',
      location: 'City Skin Clinic, Floor 5, Room 512',
      status: 'pending'
    },
    {
      id: '3',
      doctor: {
        id: 'd3',
        name: 'Dr. Sarah Williams',
        specialty: 'Neurology',
        image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      date: '2025-05-25',
      time: '9:15 AM',
      location: 'Neuro Care Institute, West Wing, Room 110',
      status: 'completed'
    },
    {
      id: '4',
      doctor: {
        id: 'd4',
        name: 'Dr. James Rodriguez',
        specialty: 'Orthopedics',
        image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      date: '2025-05-18',
      time: '3:45 PM',
      location: 'Sports Medicine Center, Floor 3, Room 305',
      status: 'cancelled'
    }
  ];
};