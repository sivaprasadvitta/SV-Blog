
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
//dark mode
import themeReducer from './theme/themeSlice';

// Combine all reducers under rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Combine rootReducer into persistedReducer for local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer as the root
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);


