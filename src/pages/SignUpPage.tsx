import React from 'react';
import SignUpForm from '../features/SignUpForm';
import styled from 'styled-components';
import bgImg from '../images/bg.jpg';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImg});
`

const Content = styled.div`
  width: 400px;
  height: 600px;
  background: #fff;
  border-radius: 20px;
`

const SignUpPage: React.FC = () => {
  return (
    <Page>
      <Content>
        <SignUpForm/>
      </Content>
    </Page>
  )
}

export default SignUpPage