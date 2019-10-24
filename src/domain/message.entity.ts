import { ApiModelProperty } from '@nestjs/swagger';
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Conversation } from './conversation.entity';

@Entity('message')
export class Message extends BaseEntity {
  @ApiModelProperty({ example: 'Quoi de neuf ?', description: 'Message Content' })
  @Column({ length: 10000 })
  content: string;

  @ManyToOne(type => Conversation, conversation => conversation.messages)
  conversation?: Conversation;
}
