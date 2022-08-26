import axios from "axios";

export const FETCHDATA = "FETCHDATA";
export const FETCHDATAONE = "FETCHDATAONE";
export const FETCHDATATWO = "FETCHDATATWO";


export const fetchAction = (data) => {
  return {
    type: FETCHDATA,
    payload: data,
  };
};

export const FetchData = () => (dispatch)=>{
  axios
    .get("http://localhost:3000/task1")
    .then((res) => {
      console.log("res",res.data);
      dispatch(fetchAction(res.data))
    })
    .catch((e) => {
      console.log(e);
    });
};

export const fetchActionone = (data) => {
  return {
    type: FETCHDATAONE,
    payload: data,
  };
};

export const FetchDataone = () => (dispatch) => {
  axios
    .get("http://localhost:3000/task2")
    .then((res) => {
      console.log("res", res.data);
      dispatch(fetchActionone(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};
export const fetchActiontwo= (data) => {
  return {
    type: FETCHDATATWO,
    payload: data,
  };
};

export const FetchDatatwo = () => (dispatch) => {
  axios
    .get("http://localhost:3000/task3")
    .then((res) => {
      console.log("res", res.data);
      dispatch(fetchActiontwo(res.data));
    })
    .catch((e) => {
      console.log(e);
    });
};
