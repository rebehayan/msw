import { http, HttpResponse } from "msw";
import { products } from "../data/product";
import { user } from "../data/user";

// const productsResolver = () => {
//   return HttpResponse.json({ products });
// };

http.get(products, async ({ request }) => {
  const payload = await request.json();
  return HttpResponse.json({ id: 1, name: "John" });
});

const usersResolver = () => {
  return HttpResponse.json({ user });
};

export const handlers = [http.get("/products", productsResolver), http.get("/users", usersResolver)];
