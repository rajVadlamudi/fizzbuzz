import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";


@observer
class CountList extends React.Component {

  render() {
    return (
      <div>
        
        <ul>
          {this.props.store.numbers.map(count => (
            <li key={count.id}>
              <span>{count.num}</span>
            </li>
          ))}
          Counter: {this.props.store.totalCount}
        </ul>
       
      </div>
    );
  }

}

export default CountList;
