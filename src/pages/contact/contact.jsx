import { ContactStyled } from "./contact.styled";
import { Button } from "../../components/button/button";

export const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };
    return (
        <ContactStyled>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="name">Dit Navn:</label>
                    <input
                        placeholder="Indtast Dit Navn"
                        required
                        type="text"
                        id="name"
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Din Email:</label>
                    <input
                        placeholder="Indtast Din Email"
                        required
                        type="email"
                        id="email"
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Din Besked:</label>
                    <textarea
                        placeholder="Indtast En Besked"
                        required
                        id="message"
                        name="message"
                    ></textarea>
                </div>

                <div className="actions">
                    <Button type="submit">Send</Button>
                    <Button>Annuller</Button>
                </div>
            </form>
        </ContactStyled>
    );
};
