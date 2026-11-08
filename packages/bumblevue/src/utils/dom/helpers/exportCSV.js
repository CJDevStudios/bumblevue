import saveAs from './saveAs.js';

export default function exportCSV(csv, filename) {
    const blob = new Blob([csv], {
        type: 'application/csv;charset=utf-8;'
    });

    const isDownloaded = saveAs({ name: filename + '.csv', src: URL.createObjectURL(blob) });

    if (!isDownloaded) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        window.open(encodeURI(csv));
    }
}
