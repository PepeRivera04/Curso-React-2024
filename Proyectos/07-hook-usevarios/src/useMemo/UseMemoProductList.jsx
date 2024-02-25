/**
 * useMemo se utiliza para guardar una variable que necesita mucho calculo y que no queremos que se vuelva a ejecutar o crear
 * en cada re-renderizado
 */

import { useMemo, useState } from "react";

const initialState = [
  {
    name: "producto1",
    price: 10,
    stock: 5,
  },
  {
    name: "producto2",
    price: 20,
    stock: 10,
  },
  {
    name: "producto3",
    price: 30,
    stock: 15,
  },
  {
    name: "producto4",
    price: 40,
    stock: 20,
  },
];

const UseMemoProductList = () => {
  const [products, setProducts] = useState(initialState);
  const [calcularCount, setCalcularCount] = useState(0);

  //   función pesada
  const calcularPrecioTotal = (product) => {
    let suma = 0;
    for (let i = 0; i < 1000000; i++) {
      suma += Math.random();
    }
    return product.price * product.stock + suma;
  };

  const memorizeTotales = useMemo(() => {
    setCalcularCount((prev) => prev + 1);
    const totalPrecios = products.map((product) => {
      return calcularPrecioTotal(product);
    });
    return totalPrecios;
  }, [products]);

  return (
    <div>
      <h1>Numero de recalculos realizados {calcularCount}</h1>
      <div>
        {products.map((producto, index) => (
          <div key={index}>
            <h2>Precio total: {memorizeTotales[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseMemoProductList;
