import { createStore } from '@reduxjs/toolkit';

import modalsReducer from './Modals';

const store = createStore(modalsReducer);

export default store;
