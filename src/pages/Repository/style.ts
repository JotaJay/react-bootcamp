import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  a {
    margin-top: 8px;
    margin-left: auto;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;
  }

  strong {
    font-size: 20px;
  }

  p {
    margin-top: 4px;
  }
`;
