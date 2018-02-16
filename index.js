// import domtoimage from 'dom-to-image';

domtoimage.toSvg(
  document.getElementById('app'),
  { quality: 0.95 }
).then(function (dataUrl) {
    console.log(dataUrl);
    var link = document.createElement('a');
    link.download = 'report.svg';
    link.href = dataUrl;
    link.click();
});
