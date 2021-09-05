export type authType = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  created_at: number;
  user?: {
    id: string;
    email: string;
    phone: string;
    role: string;
    first_name: string;
    last_name: string;
  };
};

export type jogType = {
  id: number;
  user_id: string;
  distance: number;
  time: number;
  date: number;
};
