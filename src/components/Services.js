import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"Free Cocktails",
                 info:"thisis afdafafafg"
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Free Hiking",
                 info:"thisis afdafafafg"
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"Free Shuttle",
                 info:"thisis afdafafafg"
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Free Beer",
                 info:"thisis afdafafafg"
            },
        ]
    }
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
             {this.state.services.map((item, index)=>{
                 return (
                     <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                     </article>
                 )
             })}
        </div>
      </section>
    )
  }
}
