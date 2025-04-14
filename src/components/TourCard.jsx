import { useState } from 'react';

function TourCard({ tour, removeTour }) {
    const { id, name, info, price, image } = tour;
    const [readMore, setReadMore] = useState(false);
  
    return (
      <div className="tour-card">
        <img src={image} alt={name} className="tour-image" />
        <div className="tour-info">
          <h3>{name}</h3>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? ' Show Less' : ' Read More'}
            </button>
          </p>
          <button className="not-interested-btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    );
  }
  