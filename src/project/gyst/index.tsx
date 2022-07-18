import GroupGrid from "project/gyst/component/GroupGrid";
import { GroupGridData } from "./constant";
import type { Props } from "./type";

export default function GistApp({ id }: Props) {
    return (
        <GroupGrid id={`group-grid-${id}`} value={GroupGridData} />
    );
}
