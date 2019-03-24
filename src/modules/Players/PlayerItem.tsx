import React from "react";

export default function PlayerItem(props) {
  const { player } = props;
  return <div>{player.name}</div>;
}
