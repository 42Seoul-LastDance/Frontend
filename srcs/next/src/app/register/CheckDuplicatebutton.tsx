'use client';

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { userState, setName } from '../redux/userSlice';
import store from '../redux/store';

const CheckDuplicatebuttonContent = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: userState) => state.name);
    const [isAvailable, setIsAvailable] = useState<boolean | null>(false);

    const checkDuplicate = async () => {
        try {
            const response = await axios.get(
                `http://10.14.9.4:3000/users/username/${userName}`,
            );
            setIsAvailable(true);
        } catch (error) {
            setIsAvailable(false);
        }
    };

    const dataOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.value;
        if (inputName.trim() !== '') {
            dispatch(setName(inputName));
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }
    };

    {
        isAvailable === true ? (
            <div>
                <h2>사용 가능한 닉네임입니다!</h2>
            </div>
        ) : isAvailable === false ? (
            <div>
                <h2>중복된 닉네임입니다!</h2>
            </div>
        ) : null;
    }

    return (
        <div>
            <input
                type="text"
                id="nickname"
                value={userName}
                onChange={dataOnChange}
            />
            <button onClick={checkDuplicate} disabled={isAvailable === false}>
                Check Duplicate
            </button>
        </div>
    );
};

const CheckDuplicatebutton = () => {
    return (
        <Provider store={store}>
            <CheckDuplicatebuttonContent />
        </Provider>
    );
};

export default CheckDuplicatebutton;
