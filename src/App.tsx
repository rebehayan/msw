import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./components/ProductItem";
import UserItem from "./components/UserItem";

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
      const { data } = await axios.get<List[]>("/products");
      setIslist(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("제품 전송완료");
    }
  };
  const fetchUser = async () => {
    try {
      const { data } = await axios.get<User[]>("/users");
      setUsers(data);
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

  return (
    <>
      <ul>{islist && islist?.map((item, index) => <ProductItem key={index} items={item} />)}</ul>
      <ul>{users && users?.map((item) => <UserItem key={item.id} items={item} />)}</ul>
    </>
  );
}

export default App;
