import { GroupGrid } from "gyst/component";
import { GroupGridData } from "./constant";
import type { Props } from "./type";

export default function GistApp({ id }: Props) {
    return <GroupGrid id={`group-grid-1-${id}`} value={GroupGridData} />;
}
