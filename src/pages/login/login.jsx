import { LoginStyled } from "./login.styled";
import { Button } from "../../components/button/button";
import { useUser } from "../../provider/user";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../../utils/supabaseClient";

export const Login = () => {
    const { setUser } = useUser();

    const fetchUser = async () => {
        const userInfo = await supabase.auth.getUser();
        if (userInfo.data.user !== null) {
            setUser(userInfo.data.user);
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
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error("Error: ", error.message);
                return;
            }

            fetchUser();

            navigate("/");
        } catch (err) {
            console.error("Err: ", err);
        }
    };

    return (
        <LoginStyled>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Din Email:</label>
                    <input
                        placeholder="Indtast din email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span>Du skal skrive din email</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Din adgangskode:</label>
                    <input
                        placeholder="Indtast din adgangskode"
                        type="password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span>Du skal skrive din adgangskode</span>
                    )}
                </div>

                <div className="actions">
                    <Button type="submit">Login</Button>
                    <Button type="reset">Annuller</Button>
                </div>

                <a href="#">Glemt Adgangskode?</a>
                <Link to="/register">Opret Profil</Link>
            </form>
        </LoginStyled>
    );
};
