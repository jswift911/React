import './headerBox.scss';

import React, {Component} from 'react';

export class HeaderBox extends Component {
    render() {
        const {imageHeader, posts, followers, following, nickName} = this.props.headers;
        return (
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src={imageHeader} alt=""/>
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">{nickName}</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                            <button className="btn profile-settings-btn" aria-label="profile settings"><i
                                className="fas fa-cog"
                                aria-hidden="true"/></button>
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">{posts}</span> posts</li>
                                <li><span className="profile-stat-count">{followers}</span> followers</li>
                                <li><span className="profile-stat-count">{following}</span> following</li>
                            </ul>
                        </div>
                        <div className="profile-bio">
                            <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet
                                consectetur
                                adipisicing elit
                                📷✈️🏕️</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}