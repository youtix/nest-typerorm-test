import { getConnection } from 'typeorm';
import { User } from '../../domain/user.entity';
import { user1, user3, user4 } from '../data/user.data';
import { role1, role2 } from '../data/authority.data';

export default function loadUserAuthoritiesInDB() {
  const first = getConnection()
    .createQueryBuilder()
    .relation(User, 'authorities')
    .of([user1, user3])
    .add([role1, role2]);

  const second = getConnection()
    .createQueryBuilder()
    .relation(User, 'authorities')
    .of(user4)
    .add([role2]);

  return Promise.all([first, second]);
}
