import isNotEmpty from './isNotEmpty.js';

export default function isPrintableCharacter(char = '') {
    return isNotEmpty(char) && char.length === 1 && !!char.match(/\S| /);
}
