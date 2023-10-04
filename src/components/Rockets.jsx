import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation, fetchRockets } from '../redux/rocketActions';
import '../rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const [rocketData, setRocketData] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchRockets(data));
        setRocketData(data);
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
          <div key={rocket.id} className="roc-card">
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="roc-image"
            />
            <div className="roc-info">
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
              {rocket.reserved ? (
                <>
                  <span className="reserved-badge">Reserved</span>
                  <button
                    type="button"
                    className="cancel-reservation-button"
                    onClick={() => handleCancelReservation(rocket.id)}
                  >
                    Cancel Reservation
                  </button>
                </>
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
