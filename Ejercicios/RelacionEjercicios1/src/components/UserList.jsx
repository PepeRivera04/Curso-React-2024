// import React from 'react'

const UserList = (props) => {
  const { users } = props;

  return (
    <div>
      <ol>
        {users.map((user, index) => (
          <>
            <li>
              {/* key?? */}
              <a href="">{`Usuario ${index + 1}: ${user}`}</a>
            </li>
          </>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
