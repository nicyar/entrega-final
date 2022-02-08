import React ,{ useContext }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import cervin1 from '../multimedia/cervin1.jpg'
import cervin2 from '../multimedia/cervin2.jpg'
import cervin3 from '../multimedia/cervin3.jpg'
import { SearchContext } from './SearchContext';
import ItemList from './ItemList';

function Home() {
    const { search } = useContext(SearchContext)
    return  search ?( <ItemList  items={[search]} /> ):(
       <> 
       <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={cervin1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={cervin2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cervin3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
   </> )
}

export default Home
