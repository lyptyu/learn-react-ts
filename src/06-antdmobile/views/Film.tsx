import React, {Component} from 'react';
import axios from 'axios';
import {RouteComponentProps} from "react-router-dom";
import {Button, Swiper} from "antd-mobile";
import {SwiperRef} from "antd-mobile/es/components/swiper";

interface IItem {
  filmId: number
  name: string
}
class Film extends Component<RouteComponentProps,any> {
  state = {
    list: [],
    loopList:[]
  }
  ref = React.createRef<SwiperRef>()
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

    axios({
      url:'https://m.maizuo.com/gateway?type=2&cityId=110100&k=2731170',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then((res)=>{
      console.log('banner', res)
      this.setState({
        loopList: [111,222,333]
      })
    })

  }

  render() {
    return (
      <div>
        <Swiper loop autoplay ref={this.ref}>
          {
            this.state.loopList.map(item=>{
              return <Swiper.Item style={{height:'200px'}}>{item}</Swiper.Item>
            })
          }
        </Swiper>
        <Button color={'danger'} onClick={()=>this.ref.current?.swipePrev()}>上一个</Button>
        <Button color={'primary'} onClick={()=>this.ref.current?.swipeNext()}>下一个</Button>
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
