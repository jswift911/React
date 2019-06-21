import './imageBox.scss';

import React, {Component} from 'react';
import {LikeBox} from "../likeBox";
import {CommentBox} from "../commentBox";

export class ImageBox extends Component {
    render() {
        const {image, likes, comments} = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image}
                     className="gallery-image" alt=""/>
                <div className="gallery-item-info">
                    <ul>
                        <LikeBox likes={likes}/>
                        <CommentBox comments={comments}/>
                    </ul>
                </div>
            </div>
        );
    }
}