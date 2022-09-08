import { useState } from 'react';

import Application from './src/pages/index';

function IndexPopup() {
    const [data, setData] = useState('');

    return (
        <div
            style={{
                display       : 'flex',
                flexDirection : 'column',
                padding       : 16
            }}>
            <h1>
                {'Welcome asdf ddd '}{data}{' wefto your '}<a href='https://www.plasmo.com'>{'Plasmo'}</a> {'Extension!'}
                <Application />
            </h1>
            <input
                onChange={e => setData(e.target.value)}
                value={data} />
        </div>
    );
}

export default IndexPopup;
