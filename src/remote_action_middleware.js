export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
// export default store => next => action => { }
// This is a shortcut for the following currying function
//
// export default function(store){
//   return function(next) {
//     return function(action){
//     }
//   }
// }
