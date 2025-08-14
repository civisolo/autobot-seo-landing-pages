import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to handheld vacuum cleaner page as configured in next.config.js
    router.replace('/handheld-vacuum-cleaner');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>AutoBot 吸尘器</h1>
        <p>正在跳转到主页...</p>
      </div>
    </div>
  );
}