import { ObjectIdColumn, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  createdBy?: string;

  @CreateDateColumn()
  createdDate?: Date;

  @Column()
  lastModifiedBy?: string;

  @UpdateDateColumn()
  lastModifiedDate?: Date;
}
