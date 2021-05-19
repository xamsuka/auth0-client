import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div style={{ background: 'silver', minHeight: '100%' }}>{children}</div>
  );
}

export default MainLayout;
