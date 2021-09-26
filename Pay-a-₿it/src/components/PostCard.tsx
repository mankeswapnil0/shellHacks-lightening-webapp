import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Post } from '../shared/types';
import VerifyButton from './VerifyButton';
import VoteButton from './VoteButton';
import { useStore } from '../store/Provider';

interface Props {
  post: Post;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const store = useStore();
  return (
    <Card key={post.id} className="my-4">
      <Card.Body>
        <Card.Title>
          <strong>{post.title}</strong>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Posted
          {post.signature && ' and signed '}
          by {post.username}
          {post.verified && (
            <Badge pill variant="success" className="ml-2">
              Verfied
            </Badge>
          )}
        </Card.Subtitle>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <h5 className="mt-1">
          <Badge variant={post.votes ? 'primary' : 'light'}>{post.votes}</Badge> Payments {(store.alias===post.username)?(<>received from {post.share}</>):(<>send to {post.username}</>)}
        </h5>
        <span>
          <VerifyButton post={post} />
          <VoteButton post={post} />
        </span>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
