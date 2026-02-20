import { useScrollPosition } from '../hooks/useScrollPosition';

const BackToTop = () => {
  const scrollPos = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  if (scrollPos < 250) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;