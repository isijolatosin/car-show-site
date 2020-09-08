import React from 'react';
import Car from './Car';

export default function CarList({ cars }) {
  if (cars.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no cars matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='carslist'>
      <div className='carslist-center'>
        {cars.map((item) => {
          return <Car key={item.id} car={item} />;
        })}
      </div>
    </section>
  );
}
