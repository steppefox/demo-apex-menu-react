import React, { Component } from "react";
import { connect } from "react-redux";
import { IState } from "../store";
import { AMOUNT_OF_PLAYERS } from "../store/players";
import { css } from "emotion";
import PlayerItem from "./Players/PlayerItem";
import PlayerPlaceholder from "./Players/PlayerPlaceholder";

interface IMappedProps {
  players: IState["players"]["players"];
  indexes: IState["players"]["indexes"];
}

interface IProps extends IMappedProps {}

export class PlayersList extends Component<IProps, any> {
  getPlayer(slotIndex) {
    const { indexes, players } = this.props;
    const id = indexes[slotIndex];

    if (id) {
      return (
        <div className={css(styles.playerItem)}>
          <PlayerItem player={players[id]} />
        </div>
      );
    }

    return (
      <div className={css(styles.playerItem)}>
        <PlayerPlaceholder />
      </div>
    );
  }

  render() {
    const { indexes, players } = this.props;
    let slots = [];

    for (let i = 0; i < AMOUNT_OF_PLAYERS; i++) {
      slots.push(i);
    }

    return (
      <div className={css(styles.container)}>
        {slots.map(slotIndex => this.getPlayer(slotIndex))}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  playerItem: {
    position: "relative",
    flex: "1 0 auto",
    width: `${100 / AMOUNT_OF_PLAYERS}%`,
    background: "#bada55",
    height: "10rem",
    "&::before, &::after": {
      "box-sizing": "border-box",
      position: "absolute",
      "border-top": "2px solid #c6baba",
      "border-bottom": "2px solid #c6baba",
      content: "''",
      width: "50%",
      height: "100%",
      top: 0
    },
    "&::before": {
      "border-left": "2px solid #c6baba",
      left: 0
    },
    "&::after": {
      "border-right": "2px solid #c6baba",
      right: 0
    },
    "&:nth-child(1)": {
      "&::after": {
        transform: "skew(-20deg)",
        "z-index": 1
      }
    },
    "&:nth-child(2)": {
      "&::before": {
        transform: "skew(-20deg)",
        "z-index": 2
      },
      "&::after": {
        transform: "skew(-20deg)",
        "z-index": 2
      }
    },
    "&:nth-child(3)": {
      "&::before": {
        transform: "skew(-20deg)",
        "z-index": 3
      }
    }
  }
};

export default connect((state: IState) => ({
  players: state.players.players,
  indexes: state.players.indexes
}))(PlayersList);
