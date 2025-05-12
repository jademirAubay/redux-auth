import type { AuthState } from '../features/auth/authSlice';

export interface AppState {
  auth: AuthState;
}

export const loadState = (): Partial<AppState> | undefined => {
  try {
    const serializedState = localStorage.getItem('app_state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state: Partial<AppState>) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('app_state', serialized);
  } catch {}
};