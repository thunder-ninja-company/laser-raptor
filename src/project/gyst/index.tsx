import GroupGrid from "project/gyst/component/GroupGrid";
import { SAMPLE_DATA_GROUP_GRID } from "./constant";
import type { Props } from "./type";

export default function GistApp({ id }: Props) {
    return <GroupGrid id={`group-grid-${id}`} value={SAMPLE_DATA_GROUP_GRID} />;
}
