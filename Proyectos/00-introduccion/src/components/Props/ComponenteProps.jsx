import { useState } from "react";

const Titulo = (props) => {
  return <h2 className="text-xl2 font-bold">{props.children}</h2>;
};

const Card = (props) => {
  // Este es el componente hijo
  const { title, description, bgColor, count, setCount } = props;

  //   setCount(10);

  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <p className="mt-2">
        <Titulo count={count}>
          Soy el titulo y el count del padre es: {count}
        </Titulo>
      </p>
    </div>
  );
};

const ComponenteProps = () => {
  // Este es el componente padre

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-400">
      <h1 className="text-xl font-bold">El count vale : {count}</h1>
      <Card
        title="Tarjeta 1"
        description="Contenido de la tarjeta 1"
        bgColor="bg-blue-200"
        count={count}
        setCount={setCount}
        t={setCount}
      >
        Hola que tal
      </Card>
      <Card
        title="Tarjeta 2"
        description="Contenido de la tarjeta 2"
        bgColor="bg-green-300"
      />
      <Card
        title="Tarjeta 3"
        description="Contenido de la tarjeta 3"
        bgColor="bg-pink-200"
      />
      <Card
        title="Tarjeta 4"
        description="Contenido de la tarjeta 4"
        bgColor="bg-red-400"
      />
    </div>
  );
};

export default ComponenteProps;
