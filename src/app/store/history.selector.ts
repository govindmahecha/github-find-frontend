// todo.selectors.ts
import { createSelector } from '@ngrx/store';
import { GithubResultWithHistory } from './history.model';
import { HistoryState } from './history.reducer';

export const selectHistoryState = (state: any) => {
    console.log(state);
    return state.search.searches
};

export const selectAllHistory = createSelector(
    selectHistoryState,
  (state: GithubResultWithHistory[]) => {
   console.log('selector', state);
    return state}
);
