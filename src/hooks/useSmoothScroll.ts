import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId!);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);
};

export default useSmoothScroll;