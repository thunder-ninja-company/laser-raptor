import { Footer, DoubleHeader } from "component";
import { MainLinks, UserLinks } from "project/constant";

import type { Props } from "./type";

export const Template: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <DoubleHeader mainLinks={MainLinks} userLinks={UserLinks} />
            {children}
            <Footer links={MainLinks} />
        </div>
    );
};

export default Template;
