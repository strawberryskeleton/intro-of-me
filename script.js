
const links = document.querySelectorAll('.project a');
console.log(links);

[...links].forEach(link => {
  link.addEventListener('mouseover', handleMouseOver);
  link.addEventListener('mouseleave', handleMouseLeave);
  link.addEventListener('mousemove', handleMouseMove);
});

function handlePosition(e) {
  const ID = e.currentTarget.getAttribute('data-hover-id');
  // console.log(ID);
  const wrapper = document.getElementById(ID);
  let top = "";

  // decide the position of hoverContent from top
  if (!(e.currentTarget.getBoundingClientRect().top + wrapper.offsetHeight > innerHeight)) {

    top = `${e.clientY + e.currentTarget.offsetHeight}px`;
  } else {
    top = `${e.clientY - (wrapper.offsetHeight + e.currentTarget.offsetHeight)}px`;
  }

  return `position: fixed; left: ${e.clientX -
    wrapper.offsetWidth / 2}px; top:${top}`;

}

function handleMouseOver(e) {
  // console.log("mouseover")

  const hoverContent = e.currentTarget.getAttribute("data-hover-content");
  // console.log(hoverContent);

  const ID = Math.random().toString(36).substr(2, 9);
  // console.log(ID);
  const wrapper = document.createElement('div');
  e.currentTarget.setAttribute('data-hover-id', ID);
  wrapper.setAttribute('data-hover-wrapper', '');
  wrapper.setAttribute("id", ID);

  // console.log(wrapper);
  wrapper.setAttribute('style', 'opacity:1; transform:scale(0.8)');
  wrapper.innerHTML = hoverContent;
  document.body.append(wrapper);
  wrapper.setAttribute('style', handlePosition(e));

}


function handleMouseLeave(e) {
  // console.log("mouseleave")

  const ID = e.currentTarget.getAttribute('data-hover-id');

  document.getElementById(ID).style.opacity = 0;
  document.getElementById(ID).style.transform = "scale(0.8)";

  setTimeout(() => {
    document.getElementById(ID).remove();
  }, 150)
}


function handleMouseMove(e) {
  // console.log("mousemove")

  const ID = e.currentTarget.getAttribute('data-hover-id');
  const wrapper = document.getElementById(ID);
  wrapper.setAttribute("style", handlePosition(e));
}
