import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation, fetchRockets } from '../redux/rocketActions';
import '../rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketData.length === 0) {
      fetch('https://api.spacexdata.com/v3/rockets')
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.map((rocket) => ({
            description: rocket.description,
            rocket_name: rocket.rocket_name,
            rocket_id: rocket.rocket_id,
            flickr_images: rocket.flickr_images,
            reserved: false,
          }));
          dispatch(fetchRockets(filteredData));
        })
        .catch(() => {});
    }
  }, [dispatch, rocketData.length]);

  const handleReserve = (rocketId, rocketTitle) => {
    dispatch(reserveRocket(rocketId, rocketTitle));
  };

  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="roc-container">
      {rocketData.length > 0
        && rocketData.map((rocket) => (
          <div key={rocket.rocket_id} className={`roc-card ${rocket.reserved ? 'reserved' : ''}`} data-testid="rocket-card">
            <div className="roc-image-container">
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="roc-image" />
            </div>
            <div className="roc-info">
              <div className="roc-title">
                <h2>{rocket.rocket_name}</h2>
              </div>
              <p className="rocket-description">
                {rocket.reserved && <span className="reserved-badge">Reserved </span>}
                {rocket.description}
              </p>
              {rocket.reserved ? (
                <button
                  type="button"
                  className="cancel-reservation-button"
                  onClick={() => handleCancelReservation(rocket.rocket_id)}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button"
                  className="reserve-button"
                  onClick={() => handleReserve(rocket.rocket_id, rocket.rocket_name)}
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rockets;
