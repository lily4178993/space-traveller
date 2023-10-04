import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation, fetchRockets } from '../redux/rocketActions';
import '../rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchRockets(data));
      })
      .catch(() => {});
  }, [dispatch]);

  const handleReserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className="roc-container">
      {rocketData.length > 0
        && rocketData.map((rocket) => (
          <div key={rocket.id} className={`roc-card ${rocket.reserved ? 'reserved' : ''}`}>
            <div className="roc-image-container">
              <img
                src={rocket.flickr_images[0]}
                alt={rocket.name}
                className="roc-image"
              />
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
                  onClick={() => handleCancelReservation(rocket.id)}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button"
                  className="reserve-button"
                  onClick={() => handleReserve(rocket.id)}
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
