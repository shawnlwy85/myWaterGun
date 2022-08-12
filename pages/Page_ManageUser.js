import React, { useState, useEffect, useRef } from "react";
import { Button, TextInput, NumberInput } from "@mantine/core";

import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Table } from "@mantine/core";

export default function Page_ManageUser() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const newName = useRef("");
  const newAge = useRef(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName.current,
      age: Number(newAge.current),
    });
    await reloadBD();
  };

  const updateUser = async (_id, _age) => {
    const userDoc = doc(db, "users", _id);
    const newFields = { age: _age + 1 };
    await updateDoc(userDoc, newFields);

    await reloadBD();
  };

  const deleteUser = async (_id) => {
    const userDoc = doc(db, "users", _id);
    await deleteDoc(userDoc);
    await reloadBD();
  };

  const rows = users.map((x) => (
    <tr key={x.id}>
      <td>{x.name}</td>
      <td>{x.age}</td>
      <td>
        <Button
          onClick={() => {
            updateUser(x.id, x.age);
          }}
          color="green"
        >
          Increase Age
        </Button>
      </td>
      <td>
        <Button
          onClick={() => {
            deleteUser(x.id);
          }}
          color="red"
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  const reloadBD = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(
      "Data",
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    reloadBD();
  }, []);

  return (
    <div>
      <h1>Manage User</h1>
      <br />
      <>
        <TextInput
          placeholder="Your Name"
          label="Your Name"
          onChange={(e) => {
            newName.current = e.target.value;
          }}
        />
        <NumberInput
          placeholder="Your age"
          label="Your age"
          onChange={(val) => {
            newAge.current = val;
          }}
        />

        <Button onClick={createUser}>Create User</Button>
      </>
      <br />
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Increase Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
