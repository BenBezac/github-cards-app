import React, {useState} from 'react';
import axios from "axios";

const Form = ({onSubmit}) => {
    const [userName, setUserName] = useState("");
    const handleSubmit = async function (event) {
        event.preventDefault();
        const rep = await axios.get(`https://api.github.com/users/${userName}`);

        onSubmit({
            id:  rep.data.id,
            avatar_url:  rep.data.avatar_url,
            name:  rep.data.name,
            company:  rep.data.company,
            link:  rep.data.html_url,
        });
        setUserName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ex BenBezac"
                onChange={event => setUserName(event.target.value)}
                value={userName}
                required
            />
            <button>Add Card</button>
        </form>
    );
};

export default Form;
