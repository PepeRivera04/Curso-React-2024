import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-500 rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
      <p className="text-lg">
        ¡Hola! Soy <strong>Pepe Rivera</strong>, un desarrollador apasionado por
        la tecnología y la programación.
      </p>
      <p className="text-lg mt-2">
        Este es un componente básico de página "Acerca de" hecho por mi persona.
      </p>
      <p className="text-lg mt-2">
        Si quieres ver mas proyectos que he realizado puedes encontrarlo en el
        siguiente enlace hacia github :{" "}
      </p>
      <p className="text-lg mt-2">
        Encuéntrame en GitHub:
        <a
          href="https://github.com/tuusuario"
          className="text-blue-500 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          PepeRivera04
        </a>
      </p>
    </div>
  );
};

export default About;
