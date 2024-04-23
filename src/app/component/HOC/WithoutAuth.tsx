"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const WithoutAuth = (WrappedComponent: any) => {
  const NoAuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token'); // Check if token is set in localStorage
      if (token) {
        router.push('/users'); // Redirect to login page if token is not set
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return NoAuthComponent;
};

export default WithoutAuth;
