import { user3, user4 } from './user.data';
import { Conversation } from '../../domain/conversation.entity';
import { message1, message2, message3, message4 } from './message.data';

const conversation1: Conversation = {
  sender: user3,
  reciever: user4,
  subject: 'Barbec',
  messages: [message1, message2, message3, message4],
};

export { conversation1 };
