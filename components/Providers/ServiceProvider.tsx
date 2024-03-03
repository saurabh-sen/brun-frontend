"use client";

import { Provider } from "react-redux";
import store from "@libs/store";

export default function ServiceProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Provider store={store()}>{children}</Provider>;
}