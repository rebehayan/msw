import { http, HttpResponse } from "msw";
import { products } from "../data/product";
import { user } from "../data/user";

const productsResolver = () => {
  return HttpResponse.json({ products });
};
const usersResolver = () => {
  return HttpResponse.json({ user });
};

export const handlers = [http.get("/products", productsResolver)];
export const userHandlers = [http.get("/users", usersResolver)];
