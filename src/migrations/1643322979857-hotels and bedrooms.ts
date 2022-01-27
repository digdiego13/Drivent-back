import { MigrationInterface, QueryRunner } from "typeorm";

export class hotelsAndBedrooms1643322979857 implements MigrationInterface {
    name = "hotelsAndBedrooms1643322979857"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"hotels\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"image\" character varying NOT NULL, CONSTRAINT \"PK_2bb06797684115a1ba7c705fc7b\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"bedrooms\" (\"id\" SERIAL NOT NULL, \"number\" integer NOT NULL, \"maxSeats\" integer NOT NULL, \"hotelId\" integer, CONSTRAINT \"PK_90c8ad4889139688af6714d7890\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"tickets\" ADD \"bedroomId\" integer");
      await queryRunner.query("ALTER TABLE \"bedrooms\" ADD CONSTRAINT \"FK_3b9392c51a0d90b487ab6c84487\" FOREIGN KEY (\"hotelId\") REFERENCES \"hotels\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"tickets\" ADD CONSTRAINT \"FK_b8a161e5b5e4861591ff72000eb\" FOREIGN KEY (\"bedroomId\") REFERENCES \"bedrooms\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"tickets\" DROP CONSTRAINT \"FK_b8a161e5b5e4861591ff72000eb\"");
      await queryRunner.query("ALTER TABLE \"bedrooms\" DROP CONSTRAINT \"FK_3b9392c51a0d90b487ab6c84487\"");
      await queryRunner.query("ALTER TABLE \"tickets\" DROP COLUMN \"bedroomId\"");
      await queryRunner.query("DROP TABLE \"bedrooms\"");
      await queryRunner.query("DROP TABLE \"hotels\"");
    }
}
