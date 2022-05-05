import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTableIfNotExists('clients', (table) => {
    table.string('id').primary();
    table.string('fullName').notNullable();
    table.string('birthDate').notNullable();
    table.string('cpf').notNullable();
    table.string('telNumber').notNullable();
    table.string('cep').notNullable();
    table.string('houseNumber').notNullable();
    table.string('accountBank').nullable();
    table.string('rg').notNullable();
    table.string('issuingAgency').notNullable();
    table.string('ufDispatch').notNullable();
    table.string('streetName').notNullable();
    table.string('state').notNullable();
    table.string('neighborhood').notNullable();
    table.string('city').notNullable();
    table.string('motherName').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists('clients');
}
