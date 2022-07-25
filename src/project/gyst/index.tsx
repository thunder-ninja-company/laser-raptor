import type { Props } from "./type";
import { AppRoot } from "gyst/component";
import { Provider } from "react-redux";
import store from "./store";


export default function GistApp({ id }: Props) {

    return (
        <Provider store={store}>
            <AppRoot id={`app-root-${id}`} />
        </Provider>
    );
}
