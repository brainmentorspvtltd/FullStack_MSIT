import React from 'react'
import networkOperations from '../../../shared/services/networkcall'

const PizzaCard = () => {

    const getPizzas= async()=>{
        const allPizzas = await networkOperations.getData();
        console.log(allPizzas);
    }
    getPizzas();
  return (
    <div>PizzaCard</div>
  )
}

export default PizzaCard