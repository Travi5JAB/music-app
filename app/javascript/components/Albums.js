import React from "react"

import Album from './Album'

export default class Albums extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          albums: [0,0,0,0,0]

        }
    }

  render () {
    const { albums } = this.state
    const allAlbums = albums.map((album,index) => {
      return(
        <Album
          album = {album}
          index = {index}
        />
      )
    })

    return (
      <div className = "albums">
        <h1>Albums</h1>
        {allAlbums}
      </div>

       );
     }
   }
