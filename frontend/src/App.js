import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import EditModal from "./modals/EditModal";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:7000/fetch_user");
      setUsers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error in fetching users:", error);
    }
  };

  return (
    <div>
      <Text fontSize={"18px"} textAlign={"center"}>
        Users{" "}
      </Text>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Update User</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>
                  <EditModal name={user.name} id={user._id} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
