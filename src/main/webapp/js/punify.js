function addJavascript(jsname,pos) {
    var th = document.getElementsByTagName(pos)[0];
    var s = document.createElement('script');
    s.setAttribute('type','text/javascript');
    s.setAttribute('src',jsname);
    th.appendChild(s);
}

addJavascript('/js/punycode.js', 'head');

function domainOrUrlToASCII(url) {
    if (url.contains('://')) {
        var idx = url.indexOf('://');
        var scheme = url.substr(0, idx);
        var domain = url.substr(url.indexOf('://')+3);
        return scheme + '://' + punycode.toASCII(domain);
    } else {
        return punycode.toASCII(url);
    }
}

/**
 * Take a domain name or url in one form field, punify it, and place it in
 * another field.
 * @param dummy_field
 * @param real_field
 */
function punifyDomain(dummy_field, real_field) {
    var url = document.getElementById(dummy_field).value;
    document.getElementById(real_field).value = domainOrUrlToASCII(url);
}