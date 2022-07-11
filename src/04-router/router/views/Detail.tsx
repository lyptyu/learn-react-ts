import React, {Component} from 'react';
import {RouteComponentProps} from "react-router-dom";
interface IParams {
  myid: string
}
class Detail extends Component<RouteComponentProps<IParams>> {
  componentDidMount() {
    console.log(this.props.match.params.myid)
  }

  render() {
    return (
      <div>
        Detail
      </div>
    );
  }
}

export default Detail;
