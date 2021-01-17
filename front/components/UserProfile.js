import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);

  const onLogOut = useCallback(() => {
    dispatch(logoutAction);
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          트윗
          <br />0
        </div>,
        <div key='followings'>
          팔로잉
          <br />0
        </div>,
        <div key='followers'>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0].toUpperCase()}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
