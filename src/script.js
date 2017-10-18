$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

var browser = navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? 'chrome' : 'other';
if (BrowserDetect.browser.indexOf("explorer")>-1) {
    document.write('<'+'link rel="stylesheet" href="../css/ie.css" />');
}