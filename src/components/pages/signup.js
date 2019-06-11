import React from 'react';
import styled from '@emotion/styled';

import Layout from '../Layout';
import Signup from '../Signup';

const StyledSignupPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignupPage = () => (
  <Layout>
    <StyledSignupPage>
      <Signup />
    </StyledSignupPage>
  </Layout>
);

export default SignupPage;
