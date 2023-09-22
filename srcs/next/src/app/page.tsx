import React from 'react';
import { Provider } from 'react-redux';
// import store from './redux/store'; // store의 경로는 실제 프로젝트에 맞게 수정하세요.
// import InputForm from './component/multi/InputForm';
// import LoginButton from './component/single/LoginButton';
import Link from 'next/link';

const Home = () => {
    const backAddr = process.env.BACK_ADDR;
    return (
        <main>
            <h1> 42Login! </h1>
            <Link href={`${backAddr}/auth/42login`}>
                <button>42 Login</button>{' '}
            </Link>
            <br />
            <br />
            <br />
            {/* <Link href="/register"> TempButton </Link> */}
            {/* <LoginButton/> */}
            {/* <RegisterHome/> */}

			<Link href="/game"> Game Button </Link>
        </main>
    );
};

export default Home;
