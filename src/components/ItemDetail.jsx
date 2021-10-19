
import React from 'react';
import {Card} from 'react-bootstrap';
import  ItemCount from './CountContainer';
import {Link} from 'react-router-dom';

export const ItemDetailButton = ({contador})=>{
  console.log("Contador"+contador);
    const onAdd=({e})=>{
      console.log("Estoy en onAdd ItemDetail y count:");
      document.getElementById("but1").style.display="block";
      document.getElementById("but2").style.display="none";
    alert("Se agrego tu producto");
    }

  return(
    <>
    <button disabled={contador===0} id="but2" onClick={onAdd}>Agregar al carrito</button>
    </>
  )
};
export const ItemDetail =({jsonpack})=>{
  console.log("Detalle de ItemDetail:",jsonpack);


  function Terminar(){
      window.location.href="/cart";
  }


if(jsonpack){

  return(
      <>
        <div id="centerman" align="center">
          <Card className="card">
            <Card.Header>
              <Card.Img className="top"  src={jsonpack.pictureurl} />
            </Card.Header>
            <Card.Body className="body">
              <Link to={`/item/${jsonpack.id}`}>
                <Card.Link href="#" >{jsonpack.title}</Card.Link>
              </Link>
              <Card.Subtitle className="subtitulo">Precio:{jsonpack.price}</Card.Subtitle>
              <Card.Text>
                Cantidad disponible:{jsonpack.stock}
              </Card.Text>
            </Card.Body>
          </Card>
          <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1}/>
          <button id="but1" style={{display:'none'}}  onClick={Terminar}>Terminar mi compra</button>
        </div>
      </>
    )
}
else {
  return(<></>);
}

};

