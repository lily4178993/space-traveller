import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

/**
 * A React component for displaying SpaceX missions.
 * @returns {JSX.Element} The JSX representation of the Mission component.
 */
const Mission = () => {
  const { missions, isLoading, isError } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  /**
   * Fetch missions data if the missions array is empty.
   */
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <>
      {isLoading && (<p>Loading</p>)}
      {missions && missions.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Mission Name</th>
              <th>Mission Description</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
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
    </>
  );
};

export default Mission;
