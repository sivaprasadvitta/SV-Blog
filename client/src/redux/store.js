
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { version } from 'react';
import persistStore from 'redux-persist/es/persistStore';

//all reducers under rootReducer
const rootReducer = combineReducers({
  user:userReducer,
})

const persistConfig ={
  key:'root',
  storage,
  version:1,
}

//combine rootReducer into persistReducer to perminent storage into local
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    // middleware: getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: ['persist/PERSIST'],
    //     ignoredPaths: ['register'],
    //   },
    // }),
    // middleware : (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false}), //to reduce error beacuse of redux

  },
});

export const persistor = persistStore(store);


