for (const e of document.getElementsByClassName("copy-on-click")) {
	e.onclick = () => {
		if (e.textContent != null) {
			navigator.clipboard.writeText(e.textContent);
      const deleteMe = document.createElement("span");
      deleteMe.className = "copied";
      deleteMe.innerText = "(Copied!)";
      e.insertAdjacentElement("afterend", deleteMe);

      setTimeout(()=>{ deleteMe.parentNode.removeChild(deleteMe); }, 2000);
		}
	}
}
