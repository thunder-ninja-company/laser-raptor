type MakeConstantFunction = (namespace : string) => string;

export const makeConstant = (namespace : string = '') : MakeConstantFunction =>
    (name : string) : string => `${namespace || 'LaserRaptor'}/${name}`;

export const NAMESPACE = 'LaserRaptor';

export const localConstant = makeConstant(NAMESPACE);