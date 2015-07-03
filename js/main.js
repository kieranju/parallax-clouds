var cloudFront = document.getElementById("cloud-front"),
    cloudBack = document.getElementById("cloud-back");

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function getScrollTop() {
    if (typeof pageYOffset != 'undefined') {
        return pageYOffset;
    }
    else
    {
        var body = document.body;
        var doc = document.documentElement;
        doc = (doc.clientHeight) ? doc : body;
        return doc.scrollTop;
    }
}


if (window.innerWidth > 0) // replace 0 with 825 to prevent intro on mobile devices
{
    var displace = getScrollTop();
    displace = (displace >= 200) ? 200 : displace; // comment these out for unrestricted fun

    cloudFront.style.backgroundPositionX = (displace - 100) + "px";
    cloudBack.style.backgroundPositionX = (displace - 35) + "px";
}

window.onscroll = function(event) {
    if (window.innerWidth > 825)
    {
        var displace = getScrollTop();
        displace = (displace >= 200) ? 200 : displace;

        cloudFront.style.backgroundPositionX = (displace - 100) + "px";
        cloudBack.style.backgroundPositionX = ((displace - 100) / 2.8) + "px";
    }
}
