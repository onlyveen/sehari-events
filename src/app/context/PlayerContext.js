import React, { createContext, useContext } from "react";

export const PlayerContext = createContext({
  playerStatus: {
    url: null,
    open: false,
  },
  setPlayerStatus: () => {},
});
