'use client';
import React from 'react';
import { useDispatch, Provider } from 'react-redux';
import { RootState } from '../redux/store';
import { setImageUrl } from '../redux/userSlice';
import store from '../redux/store';

const ImageFormContent = () => {
    const dispatch = useDispatch();

    const upload = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        dispatch(setImageUrl(event.target.value));
    };

    return (
        <form id="imageForm" encType="multipart/form-data">
            <label htmlFor="imageUpload"> Upload image (500x500): </label>
            <input
                type="file"
                id="imageUpload"
                accept="image/*"
                required
                onChange={upload}
            />
        </form>
    );
};

const ImageForm = () => {
    return (
        <Provider store={store}>
            <ImageFormContent />
        </Provider>
    );
};

export default ImageForm;
