import React from "react";

export default function X({ news }) {
  return (
    <div>
      <h1>news</h1>

      {news?.map((x) => {
        return (
          <div key={x.id}>
            <p>{`${x.name} , ${x.address.zipcode}`}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // console.log("data", data);
  // console.log("pre-rendring news");

  return {
    props: {
      news: data,
    },
  };
}
