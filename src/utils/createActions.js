// create action creators from actionTypes
// The action creators have a method signature of someAction([payload[, [next])
// When called without the [optional] parameters, the action creator will return an action with just the `type`
export function createActions(actionTypes) {
  const actions = {}
  Object.keys(actionTypes).forEach(type => {
    actions[type] = (payload, ...args) => {
      const action = {
        type,
        payload,
        ...args,
      }
      return action
    }
  })
  return actions
}
