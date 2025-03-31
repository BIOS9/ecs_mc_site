function copyMe(elem) {
  if (elem.textContent != null) {
    navigator.clipboard.writeText(elem.textContent);
    const deleteMe = document.createElement("span");
    deleteMe.className = "copied";
    deleteMe.innerText = "(Copied!)";
    elem.insertAdjacentElement("afterend", deleteMe);

    setTimeout(() => {
      deleteMe.parentNode.removeChild(deleteMe);
    }, 2000);
  }
}
