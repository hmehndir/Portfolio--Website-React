import Header from './components/Header/Header';
import Expertise from './components/expertise/Expertise';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import { Portfolio } from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import css from './styles/app.module.scss'

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
    <Works/>
    <Portfolio/>
    <Footer/>
  </div>
};

export default App;
