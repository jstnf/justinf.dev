import React from 'react';

class RandomExperienceCard extends React.Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

export default RandomExperienceCard;