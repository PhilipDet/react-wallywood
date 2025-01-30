import { RegisterStyled } from "./register.styled";
import supabase from "../../utils/supabaseClient";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button/button";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../provider/user";
import { GetUser } from "../../hooks/fetch";

export const Register = () => {
    const { setUser } = useUser();

    const fetchUser = async () => {
        const userInfo = await GetUser();
        if (userInfo !== null) {
            setUser(userInfo);
        } else {
            setUser(null);
        }
    };

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });
            if (error) {
                console.error("Error: ", error.message);
                return;
            }

            fetchUser();

            navigate("/login");
        } catch (err) {
            console.error("Err: ", err);
        }
    };

    return (
        <RegisterStyled>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>Du skal skrive en email</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Adgangskode:</label>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span>Du skal skrive en adgangskode</span>
                    )}
                </div>

                <div className="actions">
                    <Button type="submit">Opret</Button>
                    <Button type="reset">Annuller</Button>
                </div>

                <Link to="/login">Har allerede en profil?</Link>
            </form>
        </RegisterStyled>
    );
};
