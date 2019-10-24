import { getConnection } from 'typeorm';
import { Authority } from '../../domain/authority.entity';
import { role1, role2 } from '../data/authority.data';

export default function loadAuthoritiesInDB() {
  return getConnection()
    .createQueryBuilder()
    .insert()
    .into(Authority)
    .values([role1, role2])
    .onConflict(`("name") DO NOTHING`)
    .execute();
}
