import React from 'react';
import { Button, Card, List } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const ListWrap = styled(List)`
  margin-bottom: 20px;
`;

const MoreButton = styled.div`
  text-align: center;
  margin: 10px 0;
`;

const FollowList = ({ header, data }) => {
  return (
    <ListWrap
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size='small'
      header={<div>{header}</div>}
      loadMore={
        <MoreButton>
          <Button>더 보기</Button>
        </MoreButton>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key='stop' />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
