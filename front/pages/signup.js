import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Checkbox, Form, Input, Button } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onSubmitForm = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password, passwordCheck);
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form form={form} onFinish={onSubmitForm}>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your id!',
            },
          ]}
          label='아이디'
        >
          <Form.Item name='user-id' noStyle>
            <Input
              name='user-id'
              value={id}
              required
              onChange={onChangeId}
              placeholder='ID'
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
            },
          ]}
          label='닉네임'
        >
          <Form.Item name='user-nickname' noStyle>
            <Input
              name='user-nickname'
              value={nickname}
              required
              onChange={onChangeNickname}
              placeholder='NICKNAME'
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          label='비밀번호'
        >
          <Form.Item name='user-password' noStyle>
            <Input
              name='user-password'
              value={password}
              required
              onChange={onChangePassword}
              placeholder='PASSWORD'
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your passwordCheck!',
            },
          ]}
          label='비밀번호체크'
        >
          <Form.Item name='user-passwordCheck' noStyle>
            <Input
              name='user-passwordCheck'
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
              placeholder='PASSWORD CHECK'
            />
          </Form.Item>
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </Form.Item>

        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            약관에 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>

        <Form.Item shouldUpdate={true} style={{ marginTop: 10 }}>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              가입하기
            </Button>
          )}
        </Form.Item>
      </Form>
    </AppLayout>
  );
};

export default Signup;
