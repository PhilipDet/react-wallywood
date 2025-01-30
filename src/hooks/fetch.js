import supabase from "../utils/supabaseClient";

export const GetData = async (type, eq) => {
    if (supabase) {
        let query = supabase.from(type).select("*");

        if (eq) {
            query = query.eq(eq[0], eq[1]);
        }

        return await query
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error(error);
                return [];
            });
    }
};

export const GetUser = async () => {
    if (supabase) {
        const user = await supabase.auth.getUser();

        return user.data.user;
    }
};
