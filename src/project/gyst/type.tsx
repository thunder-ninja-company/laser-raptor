export interface GroupPanelItemDTO {
    id: string;
    value: string;
}

export interface GroupPanelDTO {
    id: string;
    groupPanelItems: GroupPanelItemDTO[];
}

export interface GroupGridDTO {
    id: string;
    groupPanels: GroupPanelDTO[];
}

export interface Props {
    id: string;
}

export interface GystAppRoot {
    groupGrid: GroupGridDTO;
    hello: number;
}

export interface DragSourceInfo {
    groupPanelItemId : string;
}
