import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootReducer from 'src/store/root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }); //to ignore redux presist warning
  },
  reducer: persistedReducer,
  undefined,
});

const persistor = persistStore(store);

export { store, persistor };
