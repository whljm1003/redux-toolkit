import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// store -> 큰 저장소
// slice -> 작은 저장소
// configureStore -> slice들을 store에 모아주는 역할
const store = configureStore({
  // reducer에 s붙이지 않는다.(단수)
  reducer: {
    // state.counter -> counterSlice state에 접근가능
    // state.counter.id
    // state.counter.value
    counter: counterSlice.reducer,
  },
});
// Rootstate를 useSelect 타입 지정
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch useDispatch 타입 지정
export type AppDispatch = typeof store.dispatch;
// 큰 저장소 export
export default store;
