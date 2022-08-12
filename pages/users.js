import React from "react";

export default function UsersList({ users }) {
  return (
    <div>
      <h1>users list</h1>

      {users?.map((x) => {
        return (
          <div key={x.id}>
            <p>{`${x.name} , ${x.email}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("data", data);

  return {
    props: {
      users: data,
    },
  };
}
