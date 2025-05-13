import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
    const { error } = await locals.supabase.auth.signOut();

    if (error) {
        redirect(303, 'login/error');
    }

    redirect(303, '/');
};
