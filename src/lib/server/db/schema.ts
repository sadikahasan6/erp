import { pgTable, serial, integer, text, date } from 'drizzle-orm/pg-core';

export const employee = pgTable('employee', {
	id: serial('id').primaryKey(),
	name: text('name'),
	nid: text('nid'),
	birthDate: date('birthDate'),
	brc: text('brc'),
	account: text('account'),
});
