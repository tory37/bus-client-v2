import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const StyledUserMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: white;

    .image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        padding: 5px;
        overflow: hidden;
        border: solid 1px black;
        margin-right: 5px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &:hover {
        color: gray;
    }
`;

const UserMenu = ({ user }) => {
  useEffect(() => {
    console.log(user);
  });

  return (
    <StyledUserMenu>
      <div className="image">
        <img src={user.imageUrl} alt="user" />
      </div>
      <i className="fas fa-caret-down" />
    </StyledUserMenu>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserMenu);
