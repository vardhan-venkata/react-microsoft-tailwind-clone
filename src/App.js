import CardsSection from './Components/CardsSection';
import { CourselDemo } from './Components/CourselDemo';
import Footer from './Components/Footer';
import ForBussiness from './Components/ForBussiness';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Hero1 from './Components/Hero1';
import LogowithText from './Components/LogowithText';
import { MainHero } from './Components/MainHero';
import OneDriveSection from './Components/OneDriveSection';
import Social from './Components/Social';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      {/* <Hero1/> */}
      {/* <MainHero/> */}
      <LogowithText/>
      <CardsSection/>
      <OneDriveSection/>
      <ForBussiness/>
      <Social/>
      <Footer/>
      </>
  );
}

export default App;
