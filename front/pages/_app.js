import React from 'react';
import Head from 'next/head';
import ProtoTypes from 'prop-types';

import wrapper from '../store/configureStore';

import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: ProtoTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
