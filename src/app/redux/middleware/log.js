const log = store => next => action => {
  console.group(action.type)
  console.log('Current action: ', action)
  console.log('Current state :', store.getState())
  console.groupEnd()
  return next(action)
}

export default log
