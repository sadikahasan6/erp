import { db } from "$lib/server/db";
import { employee } from "$lib/server/db/schema";
import { redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";


export async function load({ url }) {
  const deleteId = url.searchParams.get('delete');
  if (deleteId) {
    await db.delete(employee).where(eq(employee.id, Number(deleteId)));
    throw redirect(303, '/');
  }
  try {
    const employees = await db.query.employee.findMany();
    return { employees };

  } catch (error) {
    console.error('Failed to load products:', error);
    return { employees: [] };
  }
}
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const name = data.get('name') as string;
    const nid = data.get('nid') as string;
    const birthDate = data.get('birthDate') as string;

    if (id) {
      await db
        .update(employee)
        .set({ name, nid, birthDate })
        .where(eq(employee.id, Number(id)));
    } else {
      await db.insert(employee).values({ name, nid, birthDate });
    }

    throw redirect(303, '/');
  }
};