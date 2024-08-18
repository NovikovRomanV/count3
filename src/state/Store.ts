import {combineReducers, legacy_createStore as createStore} from "redux"
import {CountReducer} from "./CountReducer";

const rootReducer = combineReducers({
    count: CountReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store