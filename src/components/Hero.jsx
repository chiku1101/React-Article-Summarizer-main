import React from 'react';
import logo from "../assets/logo.jpeg";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 px-4'>
      <nav className='flex justify-between items-center w-full max-w-6xl mb-12 pt-3'>
        <img 
          src={logo} 
          alt='sumz_logo' 
          className='w-32 h-32 object-contain transition-transform duration-300 hover:scale-105 rounded-full shadow-md' 
        />
      </nav>
      
      <div className='text-center max-w-4xl'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in'>
          Summarize Articles with{' '}
          <br className='max-md:hidden' />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600'>
            AI Precision
          </span>
        </h1>
        
        <h2 className='text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-delay'>
          Transform lengthy articles into crystal-clear, concise summaries with Summize — 
          Your intelligent reading companion.
        </h2>
        
        <div className='flex justify-center space-x-4'>
          <button 
            className='px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full 
            shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 focus:outline-none'
          >
            Start Summarizing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;