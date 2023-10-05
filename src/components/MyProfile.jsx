import React from 'react';
import { useSelector } from 'react-redux';
import '../profile.css';

const MyProfile = () => {
  const userReservedRockets = useSelector((
    state,
  ) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="profile-container">
      <h2>My Rockets</h2>
      <div className="profile-content">
        <div className="reserved-rockets">
          {userReservedRockets.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>{' '}</th>
                </tr>
              </thead>
              <tbody>
                {userReservedRockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td style={{ border: '1px solid #ccc' }}>{rocket.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No rockets reserved yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
