import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
    value: number;
    name: string;
    imageUrl: string | null;
}

const initialState: userState = {
    value: 0,
    name: '',
    imageUrl: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // save name
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        // save image url
        setImageUrl: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload;
        },
        up: (state, action) => {
            state.value = state.value + action.payload;
        },
    },
});

export default userSlice;
export const { setName, setImageUrl, up } = userSlice.actions;
