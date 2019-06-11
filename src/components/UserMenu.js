import React from 'react';
import styled from '@emotion/styled';

const StyledUserMenu = styled.div`
  font-size: 12px;
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: center;

  position: absolute;
  right: 0;
`;

const UserMenu = () => {
  let content;
  if (true) {
    content = <div className="no-user">Login</div>;
  } else {
    content = <div className="yes-user">Tory H.</div>;
  }

  return <StyledUserMenu>{content}</StyledUserMenu>;
};

export default UserMenu;
