import React, { Component } from "react";
import { connect } from "react-redux";
import LegendsList from "./LegendsList";
import PlayersList from "./PlayersList";
import { fetchLegends } from "../store/legends";
import { connectPlayer } from "../store/players";
import { css } from "emotion";

interface IOwnProps {}

interface IMappedActions {
  fetchLegends: () => void;
  connectPlayer: typeof connectPlayer;
}

interface IProps extends IMappedActions, IOwnProps {}

export class LobbyPage extends Component<IProps, any> {
  tm = null;

  componentDidMount() {
    this.props.fetchLegends();
    this.props.connectPlayer({ id: "1", name: "overlord3000" });
    this.props.connectPlayer({ id: "2", name: "scoreleader2010" });

    this.tm = setTimeout(() => {
      this.props.connectPlayer({ id: "3", name: "berlin-wifi-network" });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.tm);
  }

  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.legendsContainer)}>
          <LegendsList />
        </div>
        <div className={css(styles.playersContainer)}>
          <PlayersList />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "ApexMK2-Regular",
    display: "flex",
    "flex-direction": "column",
    height: "100%"
  },
  legendsContainer: {
    flex: "1 0 auto"
  },
  playersContainer: {}
};

const mapDispatchToProps: IProps = {
  fetchLegends,
  connectPlayer
};

export default connect(
  null,
  mapDispatchToProps
)(LobbyPage);
