import React, {Component} from 'react';
import {RouteComponentProps} from "react-router-dom";
import store from "../../redux/store";
interface IParams {
  myid: string
}
class Detail extends Component<RouteComponentProps<IParams>> {
  componentDidMount() {
    console.log(this.props.match.params.myid)
    store.dispatch({
      type: 'hide'
    })
  }
  componentWillUnmount() {
    store.dispatch({
      type: 'show'
    })
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
