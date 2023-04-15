import LandingPageHeader from './components/landingPageHeader';
import AboutProject from './components/aboutProject';
import Advantages from './components/advantages';
import ImproveKnowledge from './components/improveKnowledge';
import TurnIntoMonitor from './components/turnIntoMonitor';
import WhoAreWe from './components/whoAreWe';

const LandingPage = () => {
  return (
    <>
      <LandingPageHeader />

      <ImproveKnowledge />

      <Advantages />

      <WhoAreWe />

      <AboutProject />

      <TurnIntoMonitor />
    </>
  );
};

export default LandingPage;
