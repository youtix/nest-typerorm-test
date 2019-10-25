import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Conversation {
  @PrimaryColumn()
  senderId?: string;
  
  @PrimaryColumn()
  recieverId?: string;

  @CreateDateColumn({ primary: true })
  date?: Date;

  @OneToMany(type => Message, message => message.conversation, { cascade: true })
  messages: Message[];

  @ManyToOne(type => User, user => user.sentConversations)
  @JoinColumn({ name: 'senderId' })
  sender?: User;

  @ManyToOne(type => User, user => user.recievedConversations)
  @JoinColumn({ name: 'recieverId' })
  reciever?: User;
}
