import { useEffect, useState } from "react";
import axios from "axios";

interface List {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
}
interface User {
  id: number;
  name: string;
  birth: number;
  city: string;
  address: string;
}

function App() {
  const [islist, setIslist] = useState<List[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get<List[]>("/products");
      setIslist(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("제품 전송완료");
    }
  };
  const fetchUser = async () => {
    try {
      const response = await axios.get<User[]>("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("사용자 전송완료");
    }
  };

  useEffect(() => {
    fetchPost();
    fetchUser();
  }, []);

  console.log(users);
  return (
    <>
      <ul>
        {islist.map((item) => (
          <li key={item.id}>
            {item.id} {item.brand} {item.name} {item.price} {item.rate} {item.review}
          </li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.id} {item.name} {item.birth} {item.city} {item.address}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
