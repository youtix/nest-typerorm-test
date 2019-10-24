import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Message } from './message.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Conversation {
  @ApiModelProperty({
    example: 'c4767ad2-3f85-486c-b932-5c46200fcf1c',
    description: 'The id of user who send conversation',
  })
  @PrimaryColumn()
  senderId?: string;

  @ApiModelProperty({
    example: '40571f0a-f981-4b52-b799-9ef82h658dgu',
    description: 'The id of user who recieve conversation',
  })
  @PrimaryColumn()
  recieverId?: string;

  @ApiModelProperty({
    example: '2019-10-13 10:14:28',
    description: 'Creation date of the conversation',
  })
  @CreateDateColumn({ primary: true })
  date?: Date;

  @ApiModelProperty({
    example: 'Barbec this week end',
    description: 'Subject of the conversation',
  })
  @Column()
  subject?: string;

  @ApiModelProperty({
    example: true,
    description: 'Flag to know if the sender deleted his conversation or not',
  })
  @Column({ name: 'deleted_sender', default: false })
  isDeletedBySender?: boolean;

  @ApiModelProperty({
    example: true,
    description: 'Flag to know if the reciever deleted his conversation or not',
  })
  @Column({ name: 'deleted_reciever', default: false })
  isDeletedByReciever?: boolean;

  @OneToMany(type => Message, message => message.conversation, { cascade: true })
  messages: Message[];

  @ManyToOne(type => User, user => user.sentConversations)
  @JoinColumn({ name: 'senderId' })
  sender?: User;

  @ManyToOne(type => User, user => user.recievedConversations)
  @JoinColumn({ name: 'recieverId' })
  reciever?: User;
}
