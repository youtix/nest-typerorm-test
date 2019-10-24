import { getConnection } from 'typeorm';
import { Conversation } from '../../domain/conversation.entity';
import { conversation1 } from '../data/conversation.data';

export default function loadConversationsInDB() {
  return getConnection()
    .getRepository(Conversation)
    .save(conversation1);
}
