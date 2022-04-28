import {
  createLeftSide,
  createRightSide,
  Either,
  isLeft,
} from '@shared/either';
import { MySQLHelper } from '../mysql-helper-connection';

export class CreateClientTable {
  static async run(): Promise<Either<string, string>> {
    const helper = await MySQLHelper.connect({
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_HOST,
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
    });

    if (isLeft(helper)) {
      return createLeftSide(helper.left);
    }

    const connection = await MySQLHelper.getConnection();

    if (isLeft(connection)) {
      return createLeftSide(connection.left);
    }

    const query =
      'CREATE TABLE IF NOT EXISTS clients (id VARCHAR(255) PRIMARY KEY, fullName VARCHAR(255), birthDate VARCHAR(255), cpf VARCHAR(255), telNumber VARCHAR(255), cep VARCHAR(255), rg VARCHAR(255), issuingAgency VARCHAR(255), ufDispatch VARCHAR(255), streetName VARCHAR(255), houseNumber INT(20), state VARCHAR(255), neighborhood VARCHAR(255), city VARCHAR(255), motherName VARCHAR(255))';

    try {
      await connection.right.query(query);

      return createRightSide('Client Table create successfull!');
    } catch (error) {
      return createLeftSide(error.message);
    }
  }
}
