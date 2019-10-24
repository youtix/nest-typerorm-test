import { Message } from '../../domain/message.entity';
import { user3, user4 } from './user.data';
import { conversation1 } from './conversation.data';

const message1: Message = {
  content: 'Hello How are you? ',
  createdBy: user3.login,
  lastModifiedBy: user3.login,
  conversation: conversation1,
};
const message2: Message = {
  content: 'Fine and you',
  createdBy: user4.login,
  lastModifiedBy: user4.login,
  conversation: conversation1,
};
const message3: Message = {
  content: 'Fine !!! barbec tomorrow ?',
  createdBy: user3.login,
  lastModifiedBy: user3.login,
  conversation: conversation1,
};
const message4: Message = {
  content: 'Yes :)',
  createdBy: user4.login,
  lastModifiedBy: user4.login,
  conversation: conversation1,
};

export { message1 };
export { message2 };
export { message3 };
export { message4 };
