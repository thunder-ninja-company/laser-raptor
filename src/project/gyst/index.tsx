import store from "./store";
import type { Props } from "./type";
import { AppRoot } from 'gyst/component';
import { Provider } from "react-redux";

export default function GistApp({ id }: Props) {
  return (
    <Provider store={store}>
      <AppRoot id={`app-root-${id}`} />
    </Provider>
  );
}
