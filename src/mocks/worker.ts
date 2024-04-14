import { setupWorker } from "msw/browser";
import { handlers, userHandlers } from "./handlers";

export const server = setupWorker(...handlers, ...userHandlers);
