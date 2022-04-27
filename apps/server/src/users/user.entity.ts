import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: true,
        default: null,
    })
    currentToken: string;

    @Column({
        length: 255,
    })
    email: string;

    @Column()
    hash: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        default: true,
    })
    isActive: boolean;

    @Column({
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;
}
