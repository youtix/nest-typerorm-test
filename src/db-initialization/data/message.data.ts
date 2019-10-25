import { Message } from '../../domain/message.entity';
import { user3, user4 } from './user.data';

const message1: Message = {
  content: 'Hello How are you? ',
  createdBy: user3.login,
  lastModifiedBy: user3.login,
};
const message2: Message = {
  content: 'Fine and you',
  createdBy: user4.login,
  lastModifiedBy: user4.login,
};
const message3: Message = {
  content: 'Fine !!! barbec tomorrow ?',
  createdBy: user3.login,
  lastModifiedBy: user3.login,
};
const message4: Message = {
  content: 'Yes :)',
  createdBy: user4.login,
  lastModifiedBy: user4.login,
};

export { message1 };
export { message2 };
export { message3 };
export { message4 };
