export interface GroupPanelItemDTO {
    id: string;
    content: string;
}

export interface PanelListDTO {
    id: string;
    items: GroupPanelItemDTO[];
}

export interface GroupGridDTO {
    id: string;
    items: PanelListDTO[];
}

export interface Props {
    id: string;
}
