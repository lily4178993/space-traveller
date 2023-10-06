import React from 'react';
import { useSelector } from 'react-redux';
import '../profile.css';

const MyProfile = () => {
  const userReservedRockets = useSelector((
    state,
  ) => state.rockets.filter((rocket) => rocket.reserved));

  const missions = useSelector((state) => state.missions.missions
    .filter((mission) => mission.reserved));

  return (
    <div className="profile-container">
      <div>
        <h2>My Missions</h2>
        {missions.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>{' '}</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="profile-container_list">{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rockets reserved yet!</p>
        )}
      </div>
      <div>
        <h2>My Rockets</h2>
        <div>
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
                    <td className="profile-container_list">{rocket.title}</td>
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
