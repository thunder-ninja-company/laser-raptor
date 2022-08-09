export const NAMESPACE = 'Dyson'

type MakeConstantFunction = (namespace : string) => string

export const makeConstant =
    (namespace  = '') : MakeConstantFunction =>
        (name : string) : string =>
            `${namespace || NAMESPACE}/${name}`

export const localConstant = makeConstant(NAMESPACE)
