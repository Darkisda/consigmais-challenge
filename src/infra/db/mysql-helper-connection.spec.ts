import { MySQLHelper } from './mysql-helper-connection';

describe('Basic connection with Database', () => {
  it('should be connect to database', async () => {
    const conn = await MySQLHelper.connect({
      database: 'consigmais',
      host: 'localhost',
      password: 'admin',
      user: 'admin',
    });

    expect(conn.left).toBe(undefined);
    expect(conn.right).toBe('Connected');
  });
});
