import { RootState } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../store/searchSlice";

export function SearchPage() {
	const count = useSelector((state : RootState) => state.oogabooga.value)
	const dispatch = useDispatch();
	return <>
	<h1>{count}</h1>
	<input></input>
	<button onClick={() => dispatch(increment())}>plus</button>
	<button onClick={() => dispatch(decrement())}>minus</button>
	</>
}