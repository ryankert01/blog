<div class="posts_friends" markdown="1"></div>
<script>
function createElementcc(elementType, style, link, innerhtml) {
  let elementCreated = document.createElement(elementType);
  if(link)elementCreated.href = link;
  elementCreated.innerHTML = innerhtml;
  if(style)elementCreated.style = style;
  return elementCreated;
}

console.log("hello");
var p_f = document.querySelector('.posts_friends');
const request = 'https://ryankert01.github.io/rss-friend/sorted.json';
let d = new Date();
fetch(request)
  .then(response => response.json()) 
  .then(json => {
    for(let i = 0; i < json.length; i++) {
        console.log(i);
        console.log(json[i].title);
        let currentItem = document.createElement('div');
        d = new Date(json[i].date);
        let e;

        // date
        let monthAppend = d.getMonth()+1;
        monthAppend = monthAppend.toString();
        monthAppend = monthAppend.length < 2 ? "0" + monthAppend : monthAppend;
        let dayAppend = d.getDate();
        dayAppend = dayAppend.toString();
        dayAppend = dayAppend.length < 2 ? "0" + dayAppend : dayAppend;
        let tempAppend = monthAppend + "-" + dayAppend + " ";
        console.log(json[i].title);
        let margin = 10;

        let style = "border-bottom: none; opacity: 65%; margin: ";
        style += margin.toString() + "px";
        

        e = createElementcc(
          'b',
          style, 
          null, 
          tempAppend
        );
        console.log(e)
        currentItem.appendChild(e);

        // title + link
        e = createElementcc('a', null, json[i].link, json[i].title);
        e.target = "_blank";
        e.rel = "noopener noreferrer";
        currentItem.appendChild(e);
        console.log(e)


        // author + link
        e = createElementcc('a', "opacity: 75%;", json[i].author.link, json[i].author.name);
        e.classList.add('link');
        e.target = "_blank";
        e.rel = "noopener noreferrer";
        e.classList.add("e-author");
        currentItem.appendChild(e);
        console.log(e)
        p_f.appendChild(currentItem);
        console.log(currentItem);
    }
  }) 
  console.log(request)
  console.log("hello");
  </script>
  <style>
.e-author {
  position: absolute; 
  right: 15%;   
}


@media screen and (max-width: 950px) {
  .e-author {
    position: relative;
    left: 15px
  }
}

</style>