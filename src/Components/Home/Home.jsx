import React from 'react';

//Data
import request from '../Request';

//Components
import Main from '../Main/Main';
import Row from '../Row/Row';

const Home = () => {
    return (
        <div>
            <Main />
            <Row id="1" title="UpComing" fetchURL={request.requestUpcoming} />
            <Row id="2" title="Popular" fetchURL={request.requestPopular} />
            <Row id="3" title="Tranding" fetchURL={request.requestTranding} />
            <Row id="4" title="Top Rated" fetchURL={request.requestTopReade} />
            <Row id="5" title="Horror" fetchURL={request.requestHerror} />
        </div>
    );
};

export default Home;