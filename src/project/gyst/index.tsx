import type { Props } from "./type";
import { Provider } from 'react-redux'
import store from './store'
import { AppRoot } from 'gyst/component';

export default function GistApp({ id }: Props) {
    return (
        <Provider store={store}>
            <AppRoot id={`app-root-${id}`} />
        </Provider>
    );
}
