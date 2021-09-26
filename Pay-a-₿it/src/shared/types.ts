export interface Post {
  id: number;
  title: string;
  content: string;
  share: string,
  username: string;
  votes: number;
  signature: string;
  pubkey: string;
  verified: boolean;
}

export const SocketEvents = {
  postUpdated: 'post-updated',
  invoicePaid: 'invoice-paid',
};
