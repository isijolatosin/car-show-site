import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CarContext } from '../context';
import StyledHero from '../components/StyledHero';
import Footer from '../components/Footer';

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = CarContext;
  // componentDidMount() {}
  render() {
    const { getCar } = this.context;
    const car = getCar(this.state.slug);
    // console.log(car);
    if (!car) {
      return (
        <div className='error'>
          <h4>no such car found...</h4>
          <Link to='/browse-cars' className='btn-primary2'>
            browse cars
          </Link>
        </div>
      );
    }
    const { capacity, description, extras, images, name, price } = car;
    const [mainImg, ...restOfTheImagesInTheImagesArray] = images;
    // console.log(restOfTheImagesInTheImagesArray);
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to='/browse-cars' className='btn-primary'>
              browse cars
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-car'>
          <div className='single-car-images'>
            {restOfTheImagesInTheImagesArray.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className='single-car-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>price</h3>
              <h6>price: ${price}</h6>
              <h6>
                capacity: <strong>{capacity}</strong> people
              </h6>

              {/* <h6>size: {size} SQRT</h6> */}
              {/* <h6>
                max capacity:{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6> */}
              {/* <h6>{pets ? 'pets are allowed' : ' no pets allowed'}</h6> */}
              {/* <h6> */}
              {/* {breakfast
                  ? 'free breakfast included'
                  : 'breakfast not included'} */}
              {/* {breakfast && 'free breakfast included'} */}
              {/* </h6> */}
            </article>
          </div>
        </section>
        <section className='car-extras'>
          <h3>Extras</h3>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
        <Footer />
      </>
    );
  }
}
