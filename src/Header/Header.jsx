import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Container>
      <Holder>
        <Logo>
          <h1>Bottle</h1>
        </Logo>
        <Navs>
          <Ul>
            <li>
              <A href="#">Home</A>
            </li>
            <li>
              <A href="#">About</A>
            </li>
            <li>
              <A href="#">Services</A>
            </li>
            <li>
              <A href="#">Contact</A>
            </li>
          </Ul>
        </Navs>
        <Button>
          <ButtonOne>Login</ButtonOne>
          <ButtonTwo>Register</ButtonTwo>
        </Button>
      </Holder>
    </Container>
  );
};

export default Header;

const ButtonTwo = styled.button`
  margin-left: 10px;
  padding: 4px 20px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 50px;
`;
const ButtonOne = styled.button`
  padding: 4px 20px;
  background-color: black;
  border: 1px solid orange;
  border-radius: 50px;
  color: white;
`;
const Button = styled.div`
  width: 200px;
  height: 40%;
`;
const A = styled.div`
  color: white;
  :hover {
    color: orange;
    transition: all 300ms eased-in-out;
  }
`;
const Ul = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
`;
const Navs = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;
const Logo = styled.div`
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: orange;
    transition: all 300ms eased-in-out;
  }
`;
const Holder = styled.div`
  width: 90%;
  height: 100%;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
