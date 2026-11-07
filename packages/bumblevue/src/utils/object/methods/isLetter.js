export default function isLetter(char) {
    return /^[a-zA-Z\u00C0-\u017F]$/.test(char);
}
