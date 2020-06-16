import React, { Component } from 'react';

class Gallery extends Component {

  render(){
    let alternate = 'https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-145_no_image-512.png';

    return(
      <div >
      {
        this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return(
            <a
            key={index}
            className="book"
            href={infoLink}
            target="_blank"
            >
            <img
            src={imageLinks !== undefined? imageLinks.thumbnail : alternate}
            alt="book image"
            className="book-img"
            />
            <div className="book-text">
                {title}
              </div>
            </a>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
