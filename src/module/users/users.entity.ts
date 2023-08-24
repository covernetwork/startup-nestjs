import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    type: "text",
  })
  address: string;

  @Column({
    type: "varchar",
    length: 225,
  })
  password: string;

  @Column({
    type: "varchar",
    length: 225,
  })
  salt: string;

}