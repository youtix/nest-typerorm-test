import { getConnection } from 'typeorm';
import { User } from '../../domain/user.entity';
import { user1, user2, user3, user4 } from '../data/user.data';

export default function loadUsersInDB() {
  return getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([user1, user2, user3, user4])
    .execute();
}
