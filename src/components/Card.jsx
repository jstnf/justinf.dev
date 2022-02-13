import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;