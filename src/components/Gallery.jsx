import { useState, useEffect } from 'react';
import TourCard from './TourCard';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API on mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tours:', error);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default Gallery;