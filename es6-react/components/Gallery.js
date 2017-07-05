import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'http://www.ccta.ufpb.br/intrum/contents/categorias/cordofones/udecra/sem-imagem.jpg';
    return (
      <div>
      {
        this.props.items.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return (
            <a 
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
            >
              <img 
                src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                alt="Book images"
                className="book-img" />
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