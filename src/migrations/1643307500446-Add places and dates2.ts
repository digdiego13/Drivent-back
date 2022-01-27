import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPlacesAndDates21643307500446 implements MigrationInterface {
    name = "AddPlacesAndDates21643307500446"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_d461b46a031313632ff16384fd2\"");
      await queryRunner.query("CREATE TABLE \"places\" (\"id\" SERIAL NOT NULL, \"placeName\" character varying NOT NULL, CONSTRAINT \"PK_1afab86e226b4c3bc9a74465c12\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"dates\" DROP COLUMN \"placeName\"");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_d461b46a031313632ff16384fd2\" FOREIGN KEY (\"placeId\") REFERENCES \"places\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_d461b46a031313632ff16384fd2\"");
      await queryRunner.query("ALTER TABLE \"dates\" ADD \"placeName\" character varying NOT NULL");
      await queryRunner.query("DROP TABLE \"places\"");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_d461b46a031313632ff16384fd2\" FOREIGN KEY (\"placeId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
}
