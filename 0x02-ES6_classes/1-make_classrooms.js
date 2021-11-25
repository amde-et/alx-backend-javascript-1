import ClassRoom from './0-classroom';

export default ClassRoom.prototype.initializeRooms = () => {
  const rooms = [];
  rooms.push(new ClassRoom(19));
  rooms.push(new ClassRoom(20));
  rooms.push(new ClassRoom(34));

  return rooms;
};
