import { createStore } from '@reduxjs/toolkit';

import modalsReducer from './modals';

const store = createStore(modalsReducer);

export default store;
