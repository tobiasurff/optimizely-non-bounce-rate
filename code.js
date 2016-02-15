(function() {
  if (window.localStorage) {
    var a = localStorage.getItem("optimizely_custom_bouncerate") ? +localStorage.getItem("optimizely_custom_bouncerate").split("|")[0] : null;
    null === localStorage.getItem("optimizely_custom_bouncerate") || localStorage.getItem("optimizely_custom_bouncerate").split("|")[1] < (new Date).getTime() - 18E5 ? localStorage.setItem("optimizely_custom_bouncerate", "1|" + (new Date).getTime()) : (localStorage.setItem("optimizely_custom_bouncerate", a + 1 + "|" + (new Date).getTime()), 2 === a ? (window.optimizely =
      window.optimizely || [], window.optimizely.push(["trackEvent", "2nd_pageview_in_session"])) : 3 === a ? (window.optimizely = window.optimizely || [], window.optimizely.push(["trackEvent", "3rd_pageview_in_session"])) : 3 < a && (window.optimizely = window.optimizely || [], window.optimizely.push(["trackEvent", "4th_or_more_pageview_in_session"])))
  }
})();
