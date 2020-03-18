import React, {useState} from 'react';
import './App.scss';
import CardList from "./components/CardList";
import Form from "./components/Form";

const App = ({title}) =>{
    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (profileData) => {
        if(profiles.filter(p => p.id = profileData.id).length === 0) {
            setProfiles([...profiles, profileData])
        }
    }

    return (
        <div>
            <div className="header">
                {title}
            </div>
            <Form onSubmit={addNewProfile}/>
            <CardList profiles={profiles}/>
        </div>
    );
}

export default App;
