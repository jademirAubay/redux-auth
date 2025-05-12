import { configureStore } from '@reduxjs/toolkit';
import authReducer, { type AuthState } from './features/auth/authSlice';
import { loadState, saveState, type AppState } from './utils/storage';

const preloadedState: Partial<AppState> | undefined = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer as (state: AuthState | undefined, action: any) => AuthState,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;