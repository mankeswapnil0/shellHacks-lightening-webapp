import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import PayModal from '../components/PayModal';
import PostCard from '../components/PostCard';
import { useStore } from '../store/Provider';
import LandingPage from '../components/LandingPage';

const PostList: React.FC = () => {
  const store = useStore();

  if (store.posts.length === 0) {
    return (
      <Jumbotron style={{ backgroundColor: '#fff' }}>
        <h1>Welcome to r/builders</h1>
        <p className="lead">
          It's a ghost town in here. Get the party started by creating the first post.
        </p>
        <p>
          <Button onClick={store.gotoCreate}>New Transaction</Button>
        </p>
      </Jumbotron>
    );
  }

  return (
    <>
      {store.alias ? (
        <>
          <h2>
            Hey {store.alias}
            <Button onClick={store.gotoCreate} className="mr-2 float-right">
              New Transaction
            </Button>
          </h2>
          {store.sortedPosts.map(post =>
            post.username === store.alias || post.share === store.alias ? (
              <>
                <PostCard key={post.id} post={post} />
              </>
            ) : (
              <></>
            ),
          )}
          {store.showPayModal && <PayModal />}
        </>
      ) : (
        <>
          <LandingPage />
        </>
      )}
    </>
  );
};

export default observer(PostList);
