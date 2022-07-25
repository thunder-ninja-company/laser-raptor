import type { GystAppContextDTO, Props } from "./type";
import { GystAppContext } from "./constant";
import { AppRoot } from "gyst/component";
import { Provider } from "react-redux";
import store from "./store";


export default function GistApp({ id }: Props) {

    const handleRemovePanel = (actionId : string) : void => {
        debugger;
    };

    const handleRemoveItem = (actionId : string) : void => {
        debugger;
    };

    const handleAddPanel = (actionId : string) : void => {
        debugger;
    };

    const handleAddItem = (actionId : string) : void => {
        debugger;
    };

    const context : GystAppContextDTO = {
        onRemovePanel : handleRemovePanel,
        onRemoveItem  : handleRemoveItem,
        onAddPanel    : handleAddPanel,
        onAddItem     : handleAddItem,
    };

    // debugger;

    return (
        <GystAppContext.Provider value={context}>
            <Provider store={store}>
                <AppRoot id={`app-root-${id}`} />
            </Provider>
        </GystAppContext.Provider>
    );
}
