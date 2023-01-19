const initState = {
  modalName: '',
  src: '',
};

const modalsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_IMG_SHARED': {
      console.log(action);
      return {
        ...state,
        modalName: action.payload.modalName,
        src: action.payload.src,
      };
    }
    case 'SHOW_MODAL': {
      return {
        ...state,
        modalName: action.payload,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modalName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalsReducer;
