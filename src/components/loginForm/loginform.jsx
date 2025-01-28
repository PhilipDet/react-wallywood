import { useForm } from "react-hook-form";
import supabase from "../../utils/supabaseClient";
import { Button } from "../button/button";
import { LoginFormStyled } from "./loginform.styled";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            console.log("User logged in:", await supabase.auth.getUser());

            if (error) {
                console.error("An error occurred:", error.message);
            } else {
                setUserEmail(user.email);
                console.log("User logged in:", user);
            }
        } catch (err) {
            console.error("An unexpected error occurred.");
        }
    };

    return (
        <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input {...register("email", { required: true })} />
                {errors.email && <span>Du skal skrive din email</span>}
            </div>

            <div className="form-group">
                <label htmlFor="password">Adgangskode:</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <span>Du skal skrive din adgangskode</span>}
            </div>

            <div className="actions">
                <Button type="submit">Login</Button>
                <Button type="reset">Annuller</Button>
            </div>
        </LoginFormStyled>
    );
};
