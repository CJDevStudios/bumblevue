import isClient from './isClient.js';

export default function isServer() {
    return !isClient();
}
