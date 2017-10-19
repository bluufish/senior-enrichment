import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel';


class BackgroundCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="http://i.imgur.com/VH2PxFj.jpg" />
                    <p className="legend">Hibike Euphonium</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/7u5suPw.jpg" />
                    <p className="legend">Chuunibyou</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/GUL00n2.png" />
                    <p className="legend">Tamako Market</p>
                </div>
                <div>
                    <img src="http://i.imgur.com/E8IqG.jpg" />
                    <p className="legend">Hyouka</p>
                </div>
            </Carousel>
        );
    }
};

export default BackgroundCarousel