export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
    payload: '',
  };
};

export const showModal = (value) => {
  return {
    type: 'SHOW_MODAL',
    payload: value,
  };
};
