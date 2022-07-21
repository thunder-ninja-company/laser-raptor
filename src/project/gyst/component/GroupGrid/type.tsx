import type { GroupGridDTO } from "gyst/type";

export interface Props {
    onChange: (value: GroupGridDTO) => void;
    value: GroupGridDTO;
}

export interface ContentProps {
    value: GroupGridDTO;
}

export interface GroupGridContext {
    onChangeCContext : (landingZoneId : string, groupPanelItemId : string) => void,
    value : GroupGridDTO;
}

export type GroupGridContextDTO = {
    onChangeContextDTO : (landingZoneId : string, groupPanelItemId : string) => void;
    value : GroupGridDTO,
}
