import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-gray-800 antialiased font-sans">
        <Header />
        
        <main className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}
