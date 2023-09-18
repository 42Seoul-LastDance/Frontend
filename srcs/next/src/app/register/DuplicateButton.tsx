'use client';

import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { userState, setName, up } from '../redux/userSlice';
import { RootState } from '../redux/store';
import store from '../redux/store';
import { SyntheticEvent } from 'react';

const DuplicateButtonContent = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: RootState) => state.user.name);
    const [isClickable, setIsClickable] = useState<boolean>(false);
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
    const backAddr = process.env.BACK_ADDR;

    const checkDuplicate = async (event: SyntheticEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `http://10.14.3.4:3000/users/username/${userName}`,
            );
            setIsAvailable(true);
            console.log('suc');
        } catch (error) {
            setIsAvailable(false);
            console.log(error);
        }
    };

    const dataOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.value;
        if (inputName.trim() !== '') {
            dispatch(setName(inputName));
            setIsClickable(true);
        } else {
            setIsClickable(false);
        }
    };

    const printResult = (): string => {
        if (isAvailable === null) return '';
        else
            return isAvailable
                ? '사용 가능한 닉네임입니다!'
                : '중복된 닉네임입니다!';
    };

    return (
        <div>
            <input
                type="text"
                id="nickname"
                value={userName}
                onChange={dataOnChange}
            />
            <button onClick={checkDuplicate} disabled={isClickable === false}>
                Check Duplicate
            </button>
            <span>{printResult()} </span>
        </div>
    );
};

const DuplicateButton = () => {
    return (
        <Provider store={store}>
            <DuplicateButtonContent />
        </Provider>
    );
};

export default DuplicateButton;
