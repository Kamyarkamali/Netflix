import React from 'react';

//Data
import request from '../Request';

//Components
import Main from '../Main/Main';
import Row from '../Row/Row';

const Home = () => {
    return (
        <div>
            <Main/>
            <Row title="UpComing" fetchURL={request.requestUpcoming}/>
            <Row title="Popular" fetchURL={request.requestPopular}/>
            <Row title="Tranding" fetchURL={request.requestTranding}/>
            <Row title="Top Rated" fetchURL={request.requestTopReade}/>
            <Row title="Horror" fetchURL={request.requestHerror}/>
        </div>
    );
};

export default Home;