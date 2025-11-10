import logo from './logo.svg';
import './App.css';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

export default App;