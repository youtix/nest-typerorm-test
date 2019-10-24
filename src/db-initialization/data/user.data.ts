import { User } from '../../domain/user.entity';

const user1: User = {
  login: 'system',
  password: 'system',
  firstName: 'System',
  lastName: 'System',
  email: 'system@localhost.it',
  imageUrl: '',
  activated: true,
  langKey: 'en',
  createdBy: 'system',
  lastModifiedBy: 'system',
};

const user2: User = {
  login: 'anonymoususer',
  password: 'anonymoususer',
  firstName: 'Anonymous',
  lastName: 'User',
  email: 'anonymoususer@localhost.it',
  imageUrl: '',
  activated: true,
  langKey: 'en',
  createdBy: 'system',
  lastModifiedBy: 'system',
};

const user3: User = {
  login: 'admin',
  password: 'admin',
  firstName: 'Administrator',
  lastName: 'Administrator',
  email: 'admin@localhost.it',
  imageUrl: '',
  activated: true,
  langKey: 'en',
  createdBy: 'system',
  lastModifiedBy: 'system',
};

const user4: User = {
  login: 'user',
  password: 'user',
  firstName: 'User',
  lastName: 'User',
  email: 'user@localhost.it',
  imageUrl: '',
  activated: true,
  langKey: 'en',
  createdBy: 'system',
  lastModifiedBy: 'system',
};

export { user1 };
export { user2 };
export { user3 };
export { user4 };
