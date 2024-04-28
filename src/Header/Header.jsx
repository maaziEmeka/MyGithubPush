import styled from "@emotion/styled";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import NavHolder from "../component/NavHolder";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Bottle</Logo>
        <Nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Nav>

        <MobileNav>
          <Button>login</Button>
          <OrangeButton>Register</OrangeButton>
        </MobileNav>
        <MobileMenu onClick={handleMenu}>
          <MdMenu />
        </MobileMenu>
      </HeaderContent>
      {showMenu && <NavHolder />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  height: 70px;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  @media (min-width: 640px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  @media (min-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

const Nav = styled.nav`
 @media (max-width: 767.98px) {
    display: none;
  }

ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 30px;
  }
  li {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: orange;
    }
  }

  a {
    text-decoration: none;
  color: inherit;
  }

}

  
`;

const MobileNav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 767.98px) {
    display: block;
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 4px 20px;
  background-color: black;
  border: 1px solid orange;
  border-radius: 50px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const OrangeButton = styled(Button)`
  margin-left: 10px;
  padding: 4px 20px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #ffbdbd;
  }
`;
