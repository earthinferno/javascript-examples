const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

//checkboxes.forEach(checkbox => console.dir(checkbox.checked));

function firstChecked() {
  let idx = 0;
  for (let checkbox of checkboxes.values()) {
    if (checkbox.checked) {
      return idx;
    }
    idx++;
  }
}

function lastChecked() {
  let lastChecked = -1;

  for (let i =0; i < checkboxes.length; i++){
    if (checkboxes[i].checked) {
      lastChecked = i;
    }    
  }
  return lastChecked;
}

function onCheck (event) {
  if (event.shiftKey && this.checked)
  {
    for (let i = firstChecked() + 1; i < lastChecked(); i++) {
      checkboxes[i].checked = true;
    }
  }
}



// function onCheck (event) {
//   if (event.shiftKey && this.checked && multiChecked())
//   {
//     let inBetween = false;
//     checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//         inBetween = !inBetween;
//       }
//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }
// }

// let lastChecked;
// function onCheck(e) {

//   let inBetween = false;
//   console.dir(this);
//   if (e.shiftKey && this.checked) {
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

checkboxes.forEach(checkbox => checkbox.addEventListener('click', onCheck));