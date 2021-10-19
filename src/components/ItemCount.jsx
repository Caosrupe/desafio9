import React from "react";
import {Button, ButtonGroup,Table} from 'react-bootstrap';
import {ItemDetailButton} from './ItemDetail';

const ItemCount=({min,max,onAdd,count,product_name})=>{
  console.log("En item count:"+count);;
    return (
  <>
        <p></p>
        <p></p>
    <ButtonGroup aria-label="Basic example">
      <Table striped bordered hover className="tabla" size="sm" align="center" >
        <thead className="thead">
          <tr>
            <th></th>
              <th>{product_name}</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ width: '18rem' }}>
          <tr>
            <td>
              <Button className="botoncito"  onClick={min}>-</Button>
            </td>
            <td align="center">{count}</td>
            <td>
              <Button className="botoncito" onClick={max}>+</Button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="center"  >
              <ItemDetailButton contador={count}/>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </ButtonGroup>
  </>
  );
};

export default ItemCount;
