import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function Home() {
  return (
    <div className="">
      <header className="flex items-center justify-center w-full">
        <Header />
      </header>
      <main className="mt-14">
        <MainContent />
      </main>
    </div>
  );
}
export default Home;
