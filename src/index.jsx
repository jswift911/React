import './assets/global.scss';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {ImageBox} from "./components/imageBox";
import {pictures} from "./pictures";
import {HeaderBox} from "./components/headerBox";
import {headerInfo} from "./header";

class App extends Component {
    render() {
        return (
            <main>
                <HeaderBox headers={headerInfo}/>
                <div className="container">
                    <div className="gallery">
                        {pictures.map((picture, idx) => <ImageBox key={idx} {...picture}/>)}
                    </div>
                </div>
            </main>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));