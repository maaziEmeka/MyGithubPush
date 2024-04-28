import React from "react";
import styled from "@emotion/styled";

const NavHolder = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="#">Home</A>
        </Li>
        <Li>
          <A href="#">About</A>
        </Li>
        <Li>
          <A href="#">Service</A>
        </Li>
        <Li>
          <A href="#">Contact</A>
        </Li>
      </Ul>
      <ButtonContainer>
        <LoginButton>login</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </ButtonContainer>
    </Nav>
  );
};

export default NavHolder;

const Nav = styled.nav`
  position: fixed;
  background-color: black;
  width: 100%;
  height: calc(100vh - 70px);
  top: 70px;
  left: 100px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  margin-top: 6px;
  list-style: none;
  padding-left: 40px;
  padding-right: 125px;
`;

const Li = styled.li`
  border-bottom: 1px solid white;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 0;
  width: 100%;
  transform: all 300ms ease-in-out;
  &:hover {
    color: orange;
    transition: all 300ms ease-in-out;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

const LoginButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  width: 100px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  color: black;
  background-color: white;
`;

const RegisterButton = styled.button`
  border: 1px solid orange;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: orange;
  color: black;
  width: 100px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
`;
