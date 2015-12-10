import React from 'react';

class Repo extends React.Component {
  render () {
    var itemClass = 'dashboard-list--item repo-status-' + this.props.status;
    var urlName = '/' + this.props.id;
    return (
      <li className={itemClass}>
        <a href={urlName}>
          <p className='dashboard-list--title'>{this.props.name}</p>
          <p className='dashboard-list--update'>Last Update: {this.props.update}</p>
          <p className='dashboard-list--favorite'>{this.props.favorite}</p>
        </a>
      </li>
    );
  };
};

export default Repo;
