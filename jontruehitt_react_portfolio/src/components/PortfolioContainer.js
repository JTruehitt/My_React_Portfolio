import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import React, { useState } from 'react';

export default function PortfolioContainer() {
  // set state for current page
  const [currentPage, setCurrentPage] = useState('About');

  // render page based on state
  const renderPage = () => {
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'Portfolio':
            return <Portfolio />;
        case 'Contact':
            return <Contact />;
        case 'Resume':
            return <Resume />;
        default:
            return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // render header and footer on every page
  return (
    <div className='d-flex flex-column'>
        <div className='main'>
          <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
          {renderPage()}
        </div>
      <Footer className='footer'/>
    </div>
  );
}
