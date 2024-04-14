interface User {
  id: number;
  name: string;
  birth: number;
  city: string;
  address: string;
}
interface Props {
  items: User;
}

function UserItem({ items }: Props) {
  const { id, name, birth, city, address } = items;
  return (
    <div>
      {id} {name} {birth} {city} {address}
    </div>
  );
}

export default UserItem;
