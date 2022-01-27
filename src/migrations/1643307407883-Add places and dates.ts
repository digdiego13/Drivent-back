import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPlacesAndDates1643307407883 implements MigrationInterface {
    name = "AddPlacesAndDates1643307407883"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"dates\" ADD \"dateName\" character varying NOT NULL");
      await queryRunner.query("ALTER TABLE \"dates\" ADD \"placeName\" character varying NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"dates\" DROP COLUMN \"placeName\"");
      await queryRunner.query("ALTER TABLE \"dates\" DROP COLUMN \"dateName\"");
    }
}
