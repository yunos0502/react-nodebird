import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [
    { nickname: 'yunos' },
    { nickname: '홍길동' },
    { nickname: '호두' },
  ];
  const followerList = [
    { nickname: 'yunos' },
    { nickname: '홍길동' },
    { nickname: '호두' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
