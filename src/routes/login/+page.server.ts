import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    login: async ({ locals: { supabase } }) => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173/login/callback',
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        });

        if (error) {
            redirect(303, 'login/error');
        }

        if (data.url) {
            redirect(303, data.url);
        }
    },
};
