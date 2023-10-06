import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1696422591799 implements MigrationInterface {
    name = 'PostRefactoring1696422591799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_44f7db41561d2c5fb68e8669a8\` ON \`utilisateur\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`username\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`fullname\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`data\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`data\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` DROP COLUMN \`fullname\``);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`utilisateur\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_44f7db41561d2c5fb68e8669a8\` ON \`utilisateur\` (\`username\`)`);
    }

}
