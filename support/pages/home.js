import React from 'react';
import Head from 'next/head.js';
import Menu from '../components/footer/index';

const Home = () => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.cdnfonts.com/css/graphik" rel="stylesheet" />
            </Head>
            <Menu />
        </div>
    );
}

export default Home;