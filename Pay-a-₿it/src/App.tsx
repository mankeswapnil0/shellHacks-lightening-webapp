import React, { ReactNode } from 'react';
import { Alert, Badge, Container, Dropdown, Nav, Navbar, NavLink , Button} from 'react-bootstrap';
import Confetti from 'react-confetti';
import { observer } from 'mobx-react-lite';
import Connect from './pages/Connect';
import CreatePost from './pages/CreatePost';
import PostList from './pages/PostList';

import { useStore } from './store/Provider';

import img1 from './images/bitcoin2.png';

function App() {
  const store = useStore();

  const pages: Record<string, ReactNode> = {
    posts: <PostList />,
    create: <CreatePost />,
    connect: <Connect />,
  };

  return (
    <>
      <Navbar
        bg="darkgray"
        variant="dark"
        style={{ backgroundColor: '#202124' }}
        expand="md"
      >
        <Navbar.Brand onClick={store.gotoPosts}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src={img1} width="100px" style={{ marginRight: '10px' }} alt="hello" />
            <h1
              style={{
                fontSize:'55px',
                fontWeight: '800',
                background:
                  'radial-gradient(ellipse farthest-corner at right bottom, #FFB302 0%, #FFBA01 8%, #FED901 30%, #FFCF00 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FED901 0%, #FFB302 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)',
                  WebkitTextFillColor: "transparent", 
                  WebkitBackgroundClip:'text' 
              }}
            >
              Pay-a-₿it
            </h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!store.connected ? (
              <Nav.Item>
                <NavLink onClick={store.gotoConnect}>
                  <Button
                    style={{ backgroundColor: '#3FB618', color: 'white', border: 'none' }}
                  >
                    Connect to LND
                  </Button>
                </NavLink>
              </Nav.Item>
            ) : (
              <>
                <Navbar.Text>
                  <Badge variant="info" pill className="mr-3">
                    {store.balance.toLocaleString()} sats
                  </Badge>
                </Navbar.Text>
                <Dropdown id="basic-nav-dropdown" alignRight>
                  <Dropdown.Toggle as={NavLink}>{store.alias}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={store.disconnect}>Disconnect</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="my-3">
        {store.error && (
          <Alert variant="danger" dismissible onClose={store.clearError}>
            {store.error}
          </Alert>
        )}
        {pages[store.page]}
      </Container>
      <Confetti numberOfPieces={store.makeItRain ? 1000 : 0} />
    </>
  );
}

export default observer(App);
