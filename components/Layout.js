import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
// import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
//import classNames from "classnames";

import styled from 'styled-components';

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    // <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
    <div>
      <Navbar />
      <Main>
        {/* Title */}
        {title && (
          <Titulo>
            {title}
          </Titulo>
        )}

        {/* Content */}
        {children}
      </Main>
      {footer && (
        <Footer>
          <ContenedorFooter className="container p-4">
            <p>&copy; fom78</p>
            <p>2019 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </ContenedorFooter>
        </Footer>
      )}
    </div>
  );
};

// Layout.proptypes = {
//   children: PropTypes.node,
//   title: PropTypes.string,
//   footer: PropTypes.bool,
// };

// Main
const Main = styled.main`
  padding-top:1.5rem;
  padding-bottom:1.5rem;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:auto;
  padding-left:auto;
  margin: 0 auto;
  width:100%;

  @media screen and (min-width: 576px)
  {
    max-width: 540px;
  }
  @media screen and (min-width: 768px)
  {
    max-width: 720px;
  }
  @media screen and  (min-width: 992px)
  {
    max-width: 960px;
  }
`

const Titulo = styled.h1`
 text-align: center!important;
  color: ${props => props.dark ? '#f8f9fa!important' : 'black!important' };
`

//  Footer
const Footer = styled.footer`
  background-color: #373a3c!important;
  text-align: center!important;
  color: #f8f9fa!important;

`;

const ContenedorFooter = styled.div`
  padding: 0.5rem!important;
  display:flex;
  align-items: center;
  align-content:center;
  justify-content: center;
  gap:10px;

  @media screen and (min-width: 576px)
  {
    max-width: 540px;
  }
  @media screen and (min-width: 768px)
  {
    max-width: 720px;
  }
  @media screen and  (min-width: 992px)
  {
    max-width: 960px;
  }
`

export default Layout;
