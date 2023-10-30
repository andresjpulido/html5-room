function _get_window_height() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight ||
    0
  );
}

/**
 * Get current absolute window scroll position
 */
function _get_window_Yscroll() {
  return (
    window.pageYOffset ||
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    0
  );
}

/**
 * Get current absolute document height
 */
function _get_doc_height() {
  return Math.max(
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0,
    document.body.offsetHeight || 0,
    document.documentElement.offsetHeight || 0,
    document.body.clientHeight || 0,
    document.documentElement.clientHeight || 0
  );
}

/**
 * Get current vertical scroll percentage
 */
function _get_scroll_percentage() {
  return (
    ((_get_window_Yscroll() + _get_window_height()) / _get_doc_height()) * 100
  );
}

document.addEventListener("scroll", function () {
  const height =
    window.scrollY /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  
  document.getElementById("progress").value = height;

  /*
  stroke-dasharray: circumference = 2 × π × radius 
stroke-dashoffset: offset = circumference × ((100 - progress)/100) 
*/
  let progress = height*100;
  let radius = 40;
  let cx = 50;
  let cy = 50;
  let da = 2*(3.14)*radius;
  let doff = (da) * ((100-progress)/100);
   
  document.getElementById("svg").setAttribute("width", `${cx*2}`);
  document.getElementById("svg").setAttribute("heigth", `${cy*2}`);
  document.getElementById("svg").setAttribute("viewport", `0 0 ${cx*2} ${cy*2}`);
  document.getElementById("circle-completed").setAttribute("r", `${radius}`);
  document.getElementById("circle-completed").setAttribute("cx", `${cx}`);
  document.getElementById("circle-completed").setAttribute("cy", `${cy}`);
  document.getElementById("circle-total").setAttribute("r", `${radius}`);
  document.getElementById("circle-total").setAttribute("cx", `${cx}`);
  document.getElementById("circle-total").setAttribute("cy", `${cy}`);
  document.getElementById("circle-completed").style.strokeDasharray = da;
  document.getElementById("circle-completed").style.strokeDashoffset = doff;
});
