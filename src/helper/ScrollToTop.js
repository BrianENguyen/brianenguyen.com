import { useEffect } from 'react';
import { useLocation } from 'react-router';

/*
Function used for scrolling to the top of the 
page after the user navigates to a different 
page via React Router
*/
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 350);
  }, [pathname]);

  return null;
}
