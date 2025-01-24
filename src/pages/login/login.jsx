import { LoginStyled } from "./login.styled";
import { Button } from "../../components/button/button";

export const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    return (
        <LoginStyled>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="email">Dit Email:</label>
                    <input
                        placeholder="Indtast Dit Email"
                        required
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Din Adgangskode:</label>
                    <input
                        placeholder="Indtast Din Adgangskode"
                        required
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>

                <div className="actions">
                    <Button type="submit">Login</Button>
                    <Button>Annuller</Button>
                </div>

                <a href="#">Glemt Adgangskode?</a>
                <a href="#">Opret Profil</a>
            </form>
        </LoginStyled>
    );
};
