export const IncNumber =()=> {
  return {
    type: 'INCREMENT'
  }
}

export const DecNumber =()=> {
  return {
    type: 'DECREMENT'
  }
}

export const Reset =()=> {
  return {
    type: 'RESET'
  }
}

export const login =()=> {
  return { 
    type: 'LOG_IN' ,
    payload: true
  }
}

export const logout =()=> {
  return { 
    type: 'LOG_OUT' ,
    payload: false 
  }
}

export const InputNum =value=> {
  return {
    type: 'INPUTNUM',
    payload: value
  }
}