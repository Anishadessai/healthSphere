import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSpring, animated } from 'react-spring';
import Logo from '../components/Logo';
import Button from '../components/Button';

const Splash: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 20 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
    config: { tension: 300, friction: 25 },
  });

  const buttonsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
    config: { tension: 300, friction: 25 },
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <animated.div style={logoAnimation} className="mb-6">
        <Logo size="lg" />
      </animated.div>
      
      <animated.div style={textAnimation} className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">HealthSphere</h1>
        <p className="text-gray-600 max-w-md">
          Your personal health companion for managing appointments and accessing health information.
        </p>
      </animated.div>
      
      <animated.div style={buttonsAnimation} className="w-full max-w-xs flex flex-col gap-3">
        <Button 
          variant="primary" 
          fullWidth 
          onClick={() => navigate('/login')}
        >
          Sign In
        </Button>
        <Button 
          variant="outline" 
          fullWidth 
          onClick={() => navigate('/login?signup=true')}
        >
          Create Account
        </Button>
      </animated.div>
    </div>
  );
};

export default Splash;