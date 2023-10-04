import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';

/**
 * React component for displaying SpaceX missions and handling reservations.
 * @returns {JSX.Element} The JSX representation of the Mission component.
 */
const Mission = () => {
  const { missions, isLoading, isError } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch missions if the array is empty
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  /**
   * Function to get the reservation status from local storage.
   * @param {number} missionID - The ID of the mission.
   * @returns {string | null} The reservation status ('reserved' or null if not reserved).
   */
  const getReservationStatus = (missionID) => localStorage.getItem(`mission_${missionID}`);

  /**
   * Handles the "Join Mission" button click.
   * @param {number} missionID - The ID of the mission to join.
   */
  const handleClickJoinMission = (missionID) => {
    dispatch(joinMission(missionID));
    localStorage.setItem(`mission_${missionID}`, 'reserved');
  };

  /**
   * Handles the "Leave Mission" button click.
   * @param {number} missionID - The ID of the mission to leave.
   */
  const handleClickLeaveMission = (missionID) => {
    dispatch(leaveMission(missionID));
    localStorage.removeItem(`mission_${missionID}`);
  };

  return (
    <section className="mission-container">
      {isLoading && <p>Loading</p>}
      {missions && missions.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id} id={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td className="mission-description">{mission.description}</td>
                <td className="mission-status">
                  {getReservationStatus(mission.mission_id) === 'reserved' ? (
                    <span className="mission-status_active">Active Member</span>
                  ) : (
                    <span className="mission-status_inactive">NOT A MEMBER</span>
                  )}
                </td>
                {getReservationStatus(mission.mission_id) === 'reserved' ? (
                  <td className="mission-status">
                    <button
                      type="button"
                      title="Leave Mission"
                      className="mission-status_button mission-status_leave"
                      onClick={() => handleClickLeaveMission(mission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  </td>
                ) : (
                  <td className="mission-status">
                    <button
                      type="button"
                      title="Join Mission"
                      className="mission-status_button mission-status_join"
                      onClick={() => handleClickJoinMission(mission.mission_id)}
                    >
                      Join Mission
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isError && (
        <p>
          ERROR:
          {' '}
          {isError}
        </p>
      )}
    </section>
  );
};

export default Mission;
