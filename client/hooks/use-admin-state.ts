import { useState, useEffect } from 'react';

export function useAdminState() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Load admin state from localStorage on mount
  useEffect(() => {
    try {
      const savedAdminState = localStorage.getItem('savanna-admin-mode');
      if (savedAdminState === 'true') {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error('Failed to load admin state:', error);
    }
  }, []);

  // Save admin state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('savanna-admin-mode', isAdmin.toString());
    } catch (error) {
      console.error('Failed to save admin state:', error);
    }
  }, [isAdmin]);

  const toggleAdmin = () => {
    setIsAdmin(prev => !prev);
  };

  const setAdmin = (value: boolean) => {
    setIsAdmin(value);
  };

  return {
    isAdmin,
    toggleAdmin,
    setAdmin,
  };
}
