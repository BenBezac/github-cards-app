import Card from "./Card";
import React from "react";

const CardList = ({profiles}) => {
    return (
        <div>
            { profiles.map(profile =>
                <Card
                    key={profile.id}
                    avatar_url={profile.avatar_url}
                    company={profile.company}
                    name={profile.name}
                    link={profile.link}
                />) }
        </div>
    )
}
export default CardList;
