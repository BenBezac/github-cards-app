import React from 'react';

const Card = ({
        name,
        avatar_url = "https://placehold.it/75",
        company, link = "https://github.com/"
    }) => {

    return (
        <div className="github-profile">
            <img src={avatar_url} alt="nope"/>
            <div className="info">
                <div className="name">{name}</div>
                <div className="company">{company}</div>
                <div className="link">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub's profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
