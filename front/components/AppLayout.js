import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';

const { Search } = Input;

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Search)`
  vertical-align: center;
`;
const AppLayout = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        {/* xs : 모바일 / sm : 태블릿 / md : 작은 데스크탑 ... > n / 24 */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='https://github.com/yunos82/react-nodebird'
            target='_blank'
            rel='noreferrer noopener' // _blank 이용 시 보안 위험 때문에 rel='noreferrer noopener' 필수
          >
            Made by Park Gyu Ae
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
