import Server from 'socket.io';

export default function startServer(store){
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  io.on('connection',(socket) => {
    // emit current state on client connection
    socket.emit('state', store.getState().toJS());
    // pass socket.io's action to redux store
    socket.on('action', store.dispatch.bind(store));
  });
}
