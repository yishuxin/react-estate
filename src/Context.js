import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

 class RoomProvider extends Component {
   state = {
     rooms: [],
     sortedRooms: [],
     featuredRooms: [],
     loading: true
   };

   componentDidMount() {
     let rooms = this.fomatData(items);
     let featuredRooms = rooms.filter(room=>room.featured===true);
     this.setState({
       rooms, 
       featuredRooms, 
       sortedRooms:rooms, 
       loading:false
     })
   }

   fomatData(items) {
     let tempItems = items.map(item => {
       let id = item.sys.id;
       let images = item.fields.images.map(image => image.fields.file.url);
       let room = { ...item.fields, images, id };
       return room;
     });
     return tempItems;
   }

   render() {
     return (
       <div>
         <RoomContext.Provider value={{ ...this.state }}>
           {this.props.children}
         </RoomContext.Provider>
       </div>
     );
   }
 }

const RoomConsumer = RoomContext.Consumer;

export {RoomConsumer, RoomContext, RoomProvider}