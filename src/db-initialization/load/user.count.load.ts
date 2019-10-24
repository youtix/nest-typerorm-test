import { getConnection } from 'typeorm';
import { User } from '../../domain/user.entity';

export default function loadUsersInDB() {
  return getConnection()
    .createQueryBuilder()
    .select('1')
    .from(User, 'u')
    .getCount();
}
