import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Icon, Image } from 'semantic-ui-react';
import imageOne from '../images/image 3.png';


export default class carouselOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    onChange = value => this.setState({ value });

    render() {
        return (
            <div>
                <Carousel
                
                    slidesPerPage={1}
                    slidesPerScroll= {1}
                    clickToChange
                    centered
                    infinite
                    animationSpeed= {700}
                    offset={10}
                    Dots
                    arrowLeft={<Icon className="icon-example" name="angle left" />}
                    arrowRight={<Icon className="icon-example" name="angle right" />}
                    addArrowClickHandler
                    value={this.state.value}
                    onChange={this.onChange}
                  
                >
                    <Image src={imageOne} />
                    <Image src={imageOne} />
                    <Image src={imageOne} />  
                    <Image src={imageOne} />
                    <Image src={imageOne} />
                    <Image src={imageOne} />
                </Carousel>
                <Dots value={this.state.value} onChange={this.onChange} number={5} />
            </div>
        );
    }
}