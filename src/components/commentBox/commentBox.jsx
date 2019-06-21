import './commentBox.scss';

import React, {Component} from 'react';

export class CommentBox extends Component {
    render() {
        const comments = this.props.comments;
        return (
            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                className="fas fa-comment"
                aria-hidden="true"/> {comments}
            </li>
        );
    }
}