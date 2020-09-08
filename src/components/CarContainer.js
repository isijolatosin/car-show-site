import React from 'react';
import CarFilter from './CarFilter';
import CarList from './CarList';
import { withCarConsumer } from '../context';
import Loading from './Loading';

function CarContainer({ context }) {
  const { loading, sortedCars, cars } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CarFilter cars={cars} />
      <CarList cars={sortedCars} />
    </>
  );
}

export default withCarConsumer(CarContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomFilter />
//             <RoomList />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
