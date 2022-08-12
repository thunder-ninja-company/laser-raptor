import '@testing-library/jest-dom/extend-expect'

import nodeCrypto from 'crypto'

window.crypto = {
    getRandomValues : function (buffer) {
        return nodeCrypto.randomFillSync(buffer)
    }
}
