export const reserveRocket = (rocketId) => ({
  type: 'RESERVE_ROCKET',
  payload: rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: 'CANCEL_RESERVATION',
  payload: rocketId,
});
