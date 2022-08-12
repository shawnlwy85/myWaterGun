import React from "react";

export default function Category({ data }) {
  return (
    <div>
      <h1>category</h1>
      <h1>
        {data?.map((x) => {
          return <div key={Math.random()}>{x.name}</div>;
        })}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log("pre-rendring category", category);
  return {
    props: {
      data: data?.filter((x) => {
        return x.id < category;
      }),
    },
  };
}
