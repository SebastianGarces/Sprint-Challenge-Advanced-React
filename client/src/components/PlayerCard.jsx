import React, { useState } from "react";

import Counter from "./Counter";

const PlayerCard = ({ player }) => {
    const [searches, setSearches] = useState(player.searches);

    return (
        <div>
            <h3>{`${player.name}`}</h3>
            <p>{`Country: ${player.country}`}</p>
            <p>{`Searched: ${searches}`}</p>
            <Counter player={player} setSearches={setSearches} />
        </div>
    );
};

export default PlayerCard;
