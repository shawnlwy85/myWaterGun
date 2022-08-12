import React from "react";
import { useRouter } from "next/router";

export default function X() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params", params);
  return (
    <div>
      <h1>{`length : ${params?.length}`}</h1>
      {params?.map((x, i) => (
        <h1 key={Math.random()}>{`${i} :  ${x}`}</h1>
      ))}
    </div>
  );
}
