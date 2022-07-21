import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from 'react-dnd'
import React from "react";
import { GroupGridContext } from "./constant";
import { useStyles } from "./style";
import type { Props } from "./type";
import Content from "./content";

// https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:1716-1755
// https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

export default function GroupGrid({ value, onChange  }: Props) {
    const { classes } = useStyles();

    // const { id, groupPanels } = value;

    const handleChange = (droplandingZoneId, draggingGroupPanelId, draggingGroupPanelItemId) => {
        // debugger;

        // const groupPanelItemCopy = Object.assign({}, value.groupPanels[groupPanelIndex].groupPanelItems[groupPanelItemIndex]);

        // const groupPanelItemCopy = ;

        for(let i = 0; i < value.groupPanels.length; i++) {
            const groupPanel = value.groupPanels[i];


        }


        // Cases
        // Drag onto index zero (landing zone), insert new groupPanel and add groupPanelItem

        // delete value.groupPanels[groupPanelIndex].groupPanelItems[groupPanelItemIndex]

        // remove the entry from the groupPanela
        // value.groupPanels

        // [groupPanelIndex].groupPanelItems.splice(groupPanelItemIndex, 1)

        // groupPanelItems


        // onChange(value);
    }

    const context = {
        onChangeContextDTO : handleChange,
        value,
    };

    // Stub required because GroupGridContext.Provider
    // requires a useContext call which cannot be used inlined here

    return (
        <GroupGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <Content value={value} />
            </DndProvider>
        </GroupGridContext.Provider>

    );
}
