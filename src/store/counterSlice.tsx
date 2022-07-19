import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: number;
};

const initialState: InitialState = {
  id: 1,
  value: 0,
};
// createSlice로 Slice를 만들 수 있다.
// createSlice는 객체를 인자로 받고 객체에는 name, initialState, reducers를 필수 요소다.
// name: 이름
// initialState: 초기 상태
// reducers: 메소드(함수)
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
    init: (state, action) => {
      state.value = 0;
    },
  },
});
// store/index.tsx (저장소)에서 사용도 하지만, dispatch 할때도 사용해야 하기에 export를 해준다.
export default counterSlice;
// action에서 조금 더 쉽게 메소드에 접근하기 위해 구조분해 할당을 해준다.
export const { up, down, init } = counterSlice.actions;
