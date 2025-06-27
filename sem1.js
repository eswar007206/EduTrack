function downloadFile(fileName) {
    const a = document.createElement('a');
    a.href = fileName;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function viewOnline(fileName) {
    window.open(fileName, '_blank');
}