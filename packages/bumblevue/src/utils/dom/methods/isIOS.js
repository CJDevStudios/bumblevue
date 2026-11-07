export default function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
}
