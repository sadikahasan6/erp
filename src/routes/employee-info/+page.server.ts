import { db } from "$lib/server/db";

export async function load() {
	try {
		const employees = await db.query.employee.findMany();
		return { employees };
	} catch (error) {
		console.error('Failed to load products:', error);
		return { employees: [] };
	}
}