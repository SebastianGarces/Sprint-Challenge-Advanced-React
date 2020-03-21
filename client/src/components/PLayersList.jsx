import React from "react";

import PlayerCard from "./PlayerCard";

const PLayersList = ({ players }) => {
    return (
        <main>
            {players.map(player => {
                return <PlayerCard key={player.id} player={player} />;
            })}
        </main>
    );
};

export default PLayersList;
