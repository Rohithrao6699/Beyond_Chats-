export type Message = {
  sender: string;
  text: string;
  timestamp: string;
};

export type Users = {
  id: number;
  name: string;
  message: string;
  time: string;
  read: boolean;
  avatar: null;
  conversation: Message[];
};
