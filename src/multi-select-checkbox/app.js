const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let previouslyChecked;

function getIndexes(previouslyChecked, currentlyChecked) {
  const checkboxesArray = Array.from(checkboxes);
  const startIdx = checkboxesArray.indexOf(previouslyChecked);
  const endIdx = checkboxesArray.indexOf(currentlyChecked);

  if (startIdx < endIdx){
    return [startIdx,  endIdx];
  }
  else {
    return [endIdx,  startIdx];
  }
}

function onCheck (event) {
  const [start, end] = getIndexes(previouslyChecked, this);
  console.log(`start: ${start} end: ${end}`);
  
  if (event.shiftKey && this.checked)
  {
    for (let i = start; i <= end; i++) {
      checkboxes[i].checked = true;
    }   
  }
  previouslyChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', onCheck));