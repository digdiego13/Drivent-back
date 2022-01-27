import { MigrationInterface, QueryRunner } from "typeorm";

export class tudo1643307168335 implements MigrationInterface {
    name = "tudo1643307168335"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"tickets\" (\"id\" SERIAL NOT NULL, \"ticketType\" character varying NOT NULL, \"thereIsHotel\" boolean NOT NULL, \"totalPrice\" integer NOT NULL, \"userId\" integer NOT NULL, CONSTRAINT \"PK_343bc942ae261cf7a1377f48fd0\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"subscriptions\" (\"id\" SERIAL NOT NULL, \"activityId\" integer, \"ticketId\" integer, CONSTRAINT \"PK_a87248d73155605cf782be9ee5e\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"dates\" (\"id\" SERIAL NOT NULL, CONSTRAINT \"PK_401724822174c3539ee7036da15\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"activities\" (\"id\" SERIAL NOT NULL, \"placeId\" integer NOT NULL, \"startTime\" character varying NOT NULL, \"endTime\" character varying NOT NULL, \"totalSeats\" integer NOT NULL, \"dateId\" integer, CONSTRAINT \"PK_7f4004429f731ffb9c88eb486a8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"UQ_1ce5592b8fd5529a35fb9fe1460\" UNIQUE (\"enrollmentId\")");
      await queryRunner.query("ALTER TABLE \"subscriptions\" ADD CONSTRAINT \"FK_047d499184b859abb75bc74289f\" FOREIGN KEY (\"activityId\") REFERENCES \"activities\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"subscriptions\" ADD CONSTRAINT \"FK_9eddf372af5e89e1e1c45fa2db3\" FOREIGN KEY (\"ticketId\") REFERENCES \"tickets\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_051a7a9104671baf216619e49f0\" FOREIGN KEY (\"dateId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_d461b46a031313632ff16384fd2\" FOREIGN KEY (\"placeId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_d461b46a031313632ff16384fd2\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_051a7a9104671baf216619e49f0\"");
      await queryRunner.query("ALTER TABLE \"subscriptions\" DROP CONSTRAINT \"FK_9eddf372af5e89e1e1c45fa2db3\"");
      await queryRunner.query("ALTER TABLE \"subscriptions\" DROP CONSTRAINT \"FK_047d499184b859abb75bc74289f\"");
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"UQ_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("DROP TABLE \"activities\"");
      await queryRunner.query("DROP TABLE \"dates\"");
      await queryRunner.query("DROP TABLE \"subscriptions\"");
      await queryRunner.query("DROP TABLE \"tickets\"");
    }
}
