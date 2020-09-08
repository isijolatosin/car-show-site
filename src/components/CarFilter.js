import React from 'react';
import { useContext } from 'react';
import { CarContext } from '../context';
import Title from './Title';

//get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function CarFilter({ cars }) {
  const context = useContext(CarContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
  } = context;

  //get unique types
  let types = getUnique(cars, 'type');
  // add all
  types = ['all', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let people = getUnique(cars, 'capacity');
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className='filter-container'>
      <Title title='search inventory' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>car type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* no of passenger */}
        <div className='form-group'>
          <label htmlFor='capacity'>No of passengers</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of no of passenger */}
        {/* car price */}
        <div className='form-group'>
          <label htmlFor='price'>car price: ${price}</label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end of car price */}
        {/* year */}
        <div className='form-group'>
          <label htmlFor='year'>Year</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              className='size-input'
              onChange={handleChange}
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* end of year */}
      </form>
    </section>
  );
}
