import { Entity, Column, OneToMany } from 'typeorm';
import { Conversation } from './conversation.entity';
import { BaseEntity } from './base.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column()
  login?: string;

  @OneToMany(type => Conversation, conversation => conversation.sender)
  sentConversations?: Conversation[];

  @OneToMany(type => Conversation, conversation => conversation.reciever)
  recievedConversations?: Conversation[];
}
