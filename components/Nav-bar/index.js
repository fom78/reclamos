import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  
  const Navbar2 = () => {
    return (
      <>
        <Nav>
          <NavLink href="/">
            {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
            hola
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink href='/blog' activeStyle>
              About
            </NavLink>
            <NavLink href='/github' activeStyle>
              Services
            </NavLink>
            {/* <NavLink to='/contact-us' activeStyle>
              Contact Us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink> */}
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink href='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    // <>
    //     <Nav>
    //         <NavLink href="/">
    //             holaa
    //         </NavLink> 
    //         <NavMenu>
    //             <NavLink href='/blog' activeStyle>
    //                     Firmas
    //             </NavLink>
    //             <NavLink href='/github' activeStyle>
    //                     Fotos
    //             </NavLink>
    //             <NavBtn>
    //             <NavBtnLink href='/signin'>Sign In</NavBtnLink>
    //             </NavBtn>
                
    //         </NavMenu> 
                
    //     </Nav>
    // </>
    );
  };
  
  export default Navbar2;