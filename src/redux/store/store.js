import { applyMiddleware, compose, createStore } from "redux"
// import thunkMiddleware from 'redux-thunk'
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import rootReducer from "../reducers/reducers"
import { persistStore, persistReducer } from "redux-persist"
import localforage from "localforage";

let composeEnhancers = compose
const LOG = true
if (
    LOG &&
    global.window &&
    global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
    console.log("pusg")
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        maxAge: 100,
        serialize: {
            options: {
                error: true,
            },
        },
    })
}

const persistConfig = {
    key: "root",
    storage: localforage,
}

export default function configureStore(preloadedState) {
    const middlewares = []
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer]
    const enhancer = composeEnhancers(...enhancers)
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer, preloadedState, enhancer)
    let persistor = persistStore(store)

    // if (process.env.NODE_ENV !== "production" && module.hot) {
    //     module.hot.accept("../reducers", () => store.replaceReducer(rootReducer))
    // }

    return { store, persistor }
}
