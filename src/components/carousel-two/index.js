import React, { Component } from 'react';
import Slider from 'react-slick';
import './carouselTwo.scss';
import Limage from '../images/Left house.png';
import Rimage from '../images/Right house.png';
import Cimage from '../images/Middle house.png';
import  {Header, Image } from 'semantic-ui-react';


export default class carouselTwo extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "5px",
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 2000,
        };

        return (
            <div className="carousel_board">
                <Slider {...settings}>
                    <div>
                        <Image src={Limage} />
                        <div className="text-area">
                            <Header>$200,000</Header>
                            <p>24682 Demevest Avenue</p>
                            <p>Arlington, TX</p>
                        </div>
                    </div>

                    <div>
                        <Image src={Cimage} />
                        <div className="text-area">
                            <Header>$200,000</Header>
                            <p>24682 Demevest Avenue</p>
                            <p>Arlington, TX</p>
                        </div>
                    </div>

                    <div>
                        <Image src={Rimage} />
                        <div className="text-area">
                            <Header>$200,000</Header>
                            <p>24682 Demevest Avenue</p>
                            <p>Arlington, TX</p>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }

}

