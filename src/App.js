import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CourseList />
        {/* You can include CourseDetails here as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
