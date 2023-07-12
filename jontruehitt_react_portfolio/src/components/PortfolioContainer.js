import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  // set state for current page

  // render page based on state
  const renderPage = () => {
    console.log('add code to render page');
  };
  // render header and footer on every page

  return (
    <div>
      <Header />
      <About /> // remove this line after testing
      <Portfolio />
      // remove this line after testing
      <Contact />
      // remove this line after testing
      <Resume />
      // remove this line after testing
      {renderPage()}
      <Footer />
    </div>
  );
}
