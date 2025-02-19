import { Link } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';

const LastViewed = () => {
  const [lastViewed] = useLocalStorage('lastViewedCharacter', null);

  if (!lastViewed) return null; // If there's no data, render nothing (or a placeholder)

  return (
    <div style={{ padding: '1rem', marginBottom: '1rem' }}>
      <h2>Last Viewed Character</h2>
      <Link to={`/character/${lastViewed.id}`}>
        <img src={lastViewed.image} alt={lastViewed.name} style={{ width: '100px' }} />
        <p>{lastViewed.name}</p>
      </Link>
    </div>
  );
};

export default LastViewed;
