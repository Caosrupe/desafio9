import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'


    const Item =({jsonpack})=>{
    const itemid=jsonpack.id;

      console.log(itemid);

        return(
          <>
          <div className="galeria">
            <Card  className="Tarjeta">
          <Card.Header>
            <Card.Img variant="top"src={jsonpack.pictureurl} />
          </Card.Header>
          <Card.Body>
            <Link className="centrar" to={`/item/${itemid}`}><Card.Link>{jsonpack.title}</Card.Link></Link>
              <Card.Subtitle className="subtitulo">Precio: {jsonpack.price}</Card.Subtitle>
                <Card.Text>
                  <p className="Texto">Descripción</p>{jsonpack.description}
                </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </>
      );
};

export default Item;
