  var theme = localStorage.getItem("theme");
  console.log(theme);

  let currentFileName = window.location.pathname.split('/').pop();
  let baseFileName = currentFileName.replace('.html', '');
  let newCSSFileName = baseFileName;

if (theme === 'W') {
    newCSSFileName = baseFileName + ".css";
} else if (theme === 'D') {
    newCSSFileName = baseFileName + "D.css";
} else if (theme === 'B') {
    newCSSFileName = baseFileName + "B.css";
} else {
	newCSSFileName = baseFileName + ".css";
}

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = newCSSFileName;

document.head.appendChild(link);