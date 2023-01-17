const initState = {
  modalName: '',
};

const modalsReducer = (state = initState, action) => {
  switch (action.type) {
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
