function changeText() {
    var paragraphs = document.getElementsByTagName("p");
    document.body.style.backgroundColor = "black";
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = "<b><i>" + paragraphs[i].innerHTML + "</i></b>";
    }
  }
