import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { IState } from "../store";
import { Legend } from "./Legends/Legend";

interface IMappedProps {
  items: IState["legends"]["items"];
  indexes: IState["legends"]["indexes"];
}
interface IOwnProps {}
interface IProps extends IMappedProps, IOwnProps {}

export class LegendsList extends Component<IProps> {
  render() {
    return (
      <div className={styles.container}>
        {this.props.indexes.map(id => (
          <Legend legend={this.props.items[id]} />
        ))}
      </div>
    );
  }
}

const styles = {
  container: css({
    display: "flex",
    width: "50rem",
    flexWrap: "wrap"
  })
};

export default connect(
  (state: IState): IMappedProps => {
    return {
      items: state.legends.items,
      indexes: state.legends.indexes
    };
  }
)(LegendsList);
