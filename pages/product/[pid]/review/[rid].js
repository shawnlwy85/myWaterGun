import React from "react";
import { useRouter } from "next/router";

export default function Rid() {
  const router = useRouter();
  const { pid, rid } = router.query;
  return <div>{`nexted route, pid=${pid}, rid=${rid}`}</div>;
}
