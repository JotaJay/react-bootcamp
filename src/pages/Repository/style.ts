import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-top: 8px;
    margin-left: auto;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const Profile = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;
  }

  strong {
    font-size: 36px;
    color: #3d3d4d;
  }

  p {
    margin-top: 4px;
    color: #737380;
    font-size: 18px;
  }
`;

export const Metrics = styled.div`
  margin-top: 40px;
  ul {
    list-style: none;
    display: flex;
  }

  li {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      color: 6c6c80;
      margin-top: 4px;
    }

    & + li {
      margin-left: 80px;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a + a {
    margin-top: 16px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
