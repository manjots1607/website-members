import React from 'react';
import Head from 'next/head';
import MemberList from 'components/members-list';
import classNames from './home-page.module.scss';

const HomePage = () => {
  return (
    <div className={classNames.container}>
      <Head>
        <title>Members | Real Dev Squad</title>
      </Head>
      <img className={classNames.img} src="/images/Real-Dev-Squad@1x.png" alt="real-dev squad" />
      <h1 className={classNames.heading}>Real Dev Squad Members</h1>
      <MemberList />
    </div>
  );
};

export default HomePage;
