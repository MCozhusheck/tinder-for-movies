import {FC, ReactElement} from 'react'
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../_redux/store";

const AllTheProviders: FC = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): any => render(ui, {wrapper: AllTheProviders, ...options})

export function makeTestStore(opts = {}) {
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

export * from '@testing-library/react'
export {customRender as render}