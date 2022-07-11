import React, {Component} from 'react';
import axios from 'axios';
import {RouteComponentProps} from "react-router-dom";

interface IItem {
  filmId: number
  name: string
}
class Film extends Component<RouteComponentProps,any> {
  state = {
    list: [],
  }
  componentDidMount() {
    axios({
      url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=9b9b8b7b7b7b7b7b',
      headers:{
        'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1575258825984269242498"}',
        'X-Host':'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log('res', res)
      this.setState({
        list: res.data.data.films
      })
    }).catch(err=>{})
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item: IItem)=><li onClick={()=>{
              this.props.history.push(`/detail/${item.filmId}`)
            }} key={item.filmId}>{item.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Film;
