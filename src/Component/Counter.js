import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {IncNumber, DecNumber, Reset, InputNum} from '../actions/index'

const Counter =()=> {
  const myState = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch();
    return (
      <>
        <h1>Counter using React Redux</h1>
        <button onClick={()=> dispatch(DecNumber())}> - </button>
        <input type="text" onChange={e => dispatch(InputNum(Number(e.target.value))) } value={myState} />
        <button onClick={()=> dispatch(IncNumber())}> + </button>
        <button onClick={()=> dispatch(Reset())}>Reset</button>
      </>
    )
}

export default Counter
