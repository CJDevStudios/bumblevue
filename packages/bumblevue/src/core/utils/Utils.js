export * from '@cjdevstudios/bumblevue/utils';
export { default as ConnectedOverlayScrollHandler } from './ConnectedOverlayScrollHandler';
export { default as HelperSet } from './HelperSet';

export function getVNodeProp(vnode, prop) {
    if (vnode) {
        let props = vnode.props;

        if (props) {
            let kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            let propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;

            const propDef = vnode.type.props?.[prop] ?? vnode.type.extends?.props?.[prop];

            return propDef?.type === Boolean && props[propName] === '' ? true : props[propName];
        }
    }

    return null;
}
