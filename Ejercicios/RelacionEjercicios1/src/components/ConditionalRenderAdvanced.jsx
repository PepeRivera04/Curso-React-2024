// import React from 'react'

const ConditionalRenderAdvanced = (props) => {
  const { isLoggedIn, userRole } = props;

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bienvenido User</p>
          {userRole === "admin" && <p>Tienes privilegio de administrador</p>}
        </div>
      ) : (
        <p>Necesitas logearte</p>
      )}
    </div>
  );
};

export default ConditionalRenderAdvanced;
