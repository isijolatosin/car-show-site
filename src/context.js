import React, { Component } from 'react';
import items from './data';
import Client from './contentful';

const CarContext = React.createContext();
class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    size: 0,
    minSize: 0,
    maxSize: 0,
  };

  //getData
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: 'beachResortRoomExample',
  //       // order: 'sys.updatedAt', //createdAt or updatedAt can both used and to reverse, prefix a '-' before
  //       //order can also be done by any of the parameters. Let's say price
  //       order: 'fields.price',
  //     });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    let cars = this.formatData(items);
    let featuredCars = cars.filter((car) => car.featured === true);
    let maxPrice = Math.max(...cars.map((item) => item.price));
    let maxSize = Math.max(...cars.map((item) => item.size));
    this.setState({
      cars: cars,
      featuredCars: featuredCars,
      sortedCars: cars,
      loading: false,
      price: maxPrice,
      maxPrice,
      year: maxSize,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let cars = { ...item.fields, images, id };
      return cars;
    });
    return tempItems;
  }
  getCar = (slug) => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find((car) => car.slug === slug);
    return car;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterCars
    );
  };
  filterCars = () => {
    let { cars, type, capacity, price, minSize, maxSize } = this.state;
    //all the cars
    let tempCars = [...cars];
    //transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    minSize = parseInt(minSize);
    maxSize = parseInt(maxSize);
    //filter by type
    if (type !== 'all') {
      tempCars = tempCars.filter((car) => car.type === type);
    }
    //filter by capacity
    if (capacity) {
      tempCars = tempCars.filter((car) => car.capacity === capacity);
    }
    //filter by price
    tempCars = tempCars.filter((car) => car.price <= price);
    //filter by year
    tempCars = tempCars.filter(
      (car) => car.size >= minSize && car.size <= maxSize
    );

    //change state
    this.setState({
      sortedCars: tempCars,
    });
  };

  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

const CarConsumer = CarContext.Consumer;

export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CarConsumer>
        {(value) => <Component {...props} context={value} />}
      </CarConsumer>
    );
  };
}
export { CarProvider, CarConsumer, CarContext };
