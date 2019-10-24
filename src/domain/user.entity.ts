import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Authority } from './authority.entity';
import { Conversation } from './conversation.entity';
import { BaseEntity } from './base.entity';

@Entity('jhi_user')
export class User extends BaseEntity {
  @ApiModelProperty({ example: 'user', description: 'User login' })
  @Column()
  login?: string;

  @ApiModelProperty({ example: 'User', description: 'User first name' })
  @Column()
  firstName?: string;

  @ApiModelProperty({ example: 'User', description: 'User last name' })
  @Column()
  lastName?: string;

  @ApiModelProperty({ example: 'user@localhost', description: 'User email' })
  @Column()
  email?: string;

  @ApiModelProperty({ example: 'true', description: 'User activation' })
  @Column()
  activated?: boolean;

  @ApiModelProperty({ example: 'en', description: 'User language' })
  @Column()
  langKey?: string;

  @ManyToMany(type => Authority)
  @JoinTable()
  authorities?: string[];

  @ApiModelProperty({ example: 'user', description: 'User password' })
  @Column()
  password?: string;

  @Column()
  imageUrl?: string;

  @Column({ nullable: true })
  activationKey?: string;

  @Column({ nullable: true })
  resetKey?: string;

  @Column({ nullable: true })
  resetDate?: Date;

  @OneToMany(type => Conversation, conversation => conversation.sender)
  sentConversations?: Conversation[];

  @OneToMany(type => Conversation, conversation => conversation.reciever)
  recievedConversations?: Conversation[];
}
