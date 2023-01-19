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

export const showModalImgShared = (obj) => {
  return {
    type: 'SHOW_MODAL_IMG_SHARED',
    // obj = {modalName, src}
    payload: obj,
  };
};
