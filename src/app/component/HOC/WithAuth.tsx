"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const WithAuth = (WrappedComponent: any) => {
    const AuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token'); // Check if token is set in localStorage
      if (!token) {
        router.push('/login'); // Redirect to login page if token is not set
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default WithAuth;
