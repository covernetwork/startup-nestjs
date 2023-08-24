import { MigrationInterface, QueryRunner } from "typeorm"

export class Users100000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
