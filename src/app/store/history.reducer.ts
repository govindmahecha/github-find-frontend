import { createReducer, on } from "@ngrx/store";
import { ErrorState, GithubResultWithHistory } from "./history.model";
import { addToHistory, clearHistory } from "./history.action";

export interface HistoryState {
    searches : Array<GithubResultWithHistory | ErrorState>
}

export const initialState: HistoryState = {
    searches: []
}

export const historyReducer = createReducer(
    initialState,
    on(addToHistory, (state, { searchHistory }) => ({
      ...state,
      searches: [...state.searches, searchHistory],
    })),
    on(clearHistory, (state) => ({
      searches: [],
    })) 
  );
  
