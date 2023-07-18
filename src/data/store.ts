import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store, Dispatch } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IReduxAction, InitialState } from 'ts/interfaces/redux/redux.action';
import { composeWithDevTools } from "@redux-devtools/extension";
import createApiMiddleware from './middleware/api';
import rootReducer from "./reducers/rootReducer";

const apiMiddleware = createApiMiddleware();

const configureStore = (initialState = {}): Store<InitialState, IReduxAction> & {
  dispatch: Dispatch;
} => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        apiMiddleware,
      ),
    ),
  );
}

export const store = configureStore();
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
