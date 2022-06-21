import { Footer, Header } from 'component';
import { MainLinks, UserLinks } from 'project/constant';

import type { Props } from './type';

type User = {
    name: string;
};

export const Template: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <Header.default mainLinks={MainLinks} userLinks={UserLinks} />
            {children}
            <Footer.default links={MainLinks} />
        </div>
    );
};

export default Template;
