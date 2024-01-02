import { configureStore } from '@reduxjs/toolkit'
import character from './Slice/Character'

export const store = configureStore({
    reducer: {
        character: character,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch