import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { AppDispatch, State } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
