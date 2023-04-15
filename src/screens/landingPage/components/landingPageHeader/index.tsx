import { useEffect, useState } from 'react';
import Header from '../../../../components/header';
import { HeaderContainer } from './styles';

const LandingPageHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Header showLogin={true} showRegisterButton={true}></Header>
      </HeaderContainer>
    </>
  );
};

export default LandingPageHeader;
