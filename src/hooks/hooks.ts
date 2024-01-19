import { TypedUseSelectorHook, useSelector } from "react-redux";

import { State } from "../type";

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
