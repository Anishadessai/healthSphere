import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Calendar, Activity, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/appointments', label: 'Appointments', icon: Calendar },
    { to: '/symptoms', label: 'Symptoms', icon: Activity },
    { to: '/profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center py-2 w-full"
              >
                <Icon 
                  size={22} 
                  className={`mb-1 ${isActive ? 'text-primary-500' : 'text-gray-500'}`}
                />
                <span 
                  className={`text-xs ${isActive ? 'text-primary-500 font-medium' : 'text-gray-500'}`}
                >
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;