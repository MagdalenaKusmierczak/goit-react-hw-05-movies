import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'Service/Loader/Loader';
import {
  Container,
  Header,
  Navigation,
  NavigationItem,
} from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/movies">Movies</NavigationItem>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
