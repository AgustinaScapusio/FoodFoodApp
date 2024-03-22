import { RootState } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { demeow, meow } from "../../store/searchSlice";

export function SearchPage() {
	const count = useSelector((state : RootState) => state.oogabooga.value)
	const dispatch = useDispatch();
	return <>
	<h1>{count}</h1>
	<button onClick={() => dispatch(meow())}>plus</button>
	<button onClick={() => dispatch(demeow())}>minus</button>
	</>
}