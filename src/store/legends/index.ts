import axios from "axios";

type TLegend = {
  id: string;
};

type TLegendsItems = {
  [key: string]: TLegend;
};

export type TLegendsState = {
  items: TLegendsItems;
  indexes: string[];
  status: string | null;
};

const initialState: TLegendsState = {
  items: {},
  indexes: [],
  status: null
};

export const legendsReducer = (
  state: TLegendsState = initialState,
  action
): TLegendsState => {
  switch (action.type) {
    case "SET_LEGENDS":
      const legends: TLegendsItems = action.payload;

      return {
        ...state,
        items: legends,
        indexes: Object.keys(legends)
      };
    default:
      return state;
  }
};

export const fetchLegends = () => dispatch => {
  return axios
    .get("/data/legends.json")
    .then(({ data }) => {
      dispatch({
        type: "SET_LEGENDS",
        payload: data
      });
    })
    .catch(e => {
      console.log("Ooopsie", e);
    });
};
