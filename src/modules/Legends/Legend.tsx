import React from "react";
import { css } from "emotion";

export function Legend(props) {
  const { legend } = props;
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{legend.title}</div>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    position: "relative",
    width: "100px",
    height: "70px",
    transform: "skew(-20deg)",
    background: "red",
    marginRight: "15px",
    border: "3px solid #c6baba"
  }),
  titleContainer: css({
    padding: "3px 0",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#c6baba"
  }),
  title: css({
    fontSize: "12px",
    transform: "skew(20deg)",
    textTransform: "uppercase"
  })
};
