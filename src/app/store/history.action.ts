import { createAction, props } from '@ngrx/store';
import { ErrorState, GithubResultWithHistory } from './history.model';

export const addToHistory = createAction(
    '[history] add to history',
    props<{searchHistory: GithubResultWithHistory | ErrorState}>()
)

export const clearHistory = createAction(
    '[history] remove history'
)