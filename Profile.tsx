import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Calendar, Clock, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">{user?.name || 'User'}</h1>
        <p className="text-gray-600">{user?.email}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-2"
        >
          Edit Profile
        </Button>
      </div>
      
      <div className="card mb-6">
        <div className="border-b border-gray-100 pb-2 mb-4">
          <h2 className="font-semibold">Account Settings</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <User size={18} className="text-gray-500 mr-3" />
              <span>Personal Information</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Calendar size={18} className="text-gray-500 mr-3" />
              <span>Appointment History</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Clock size={18} className="text-gray-500 mr-3" />
              <span>Reminders</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Bell size={18} className="text-gray-500 mr-3" />
              <span>Notifications</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="border-b border-gray-100 pb-2 mb-4">
          <h2 className="font-semibold">Privacy & Security</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Shield size={18} className="text-gray-500 mr-3" />
              <span>Privacy Settings</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Lock size={18} className="text-gray-500 mr-3" />
              <span>Change Password</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="border-b border-gray-100 pb-2 mb-4">
          <h2 className="font-semibold">About</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <HelpCircle size={18} className="text-gray-500 mr-3" />
              <span>Help & Support</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <FileText size={18} className="text-gray-500 mr-3" />
              <span>Terms of Service</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Shield size={18} className="text-gray-500 mr-3" />
              <span>Privacy Policy</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
          
          <div className="py-3 flex justify-between items-center">
            <div className="flex items-center">
              <Info size={18} className="text-gray-500 mr-3" />
              <span>About HealthSphere</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500 mr-2">v1.0.0</span>
              <Logo size="sm" />
            </div>
          </div>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        fullWidth
        icon={<LogOut size={18} />}
        className="text-red-500 border-red-500 hover:bg-red-50"
        onClick={handleLogout}
      >
        Sign Out
      </Button>
    </div>
  );
};

// These are the missing icon components
const Lock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const FileText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const HelpCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const Info = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export default Profile;