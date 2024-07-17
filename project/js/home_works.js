const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

gmailButton.addEventListener('click', () => {
  const gmailAddress = gmailInput.value.trim();
  const regex = /^[\w\.-]+@(?:[a-z0-9\-]+\.)+[a-z]{2,}$/i;

  if (regex.test(gmailAddress)) {
    gmailResult.textContent = 'YES';
    gmailResult.style.color = 'green'
  } else {
    gmailResult.textContent = 'NO';
    gmailResult.style.color = 'red'
  }
});

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block')
const parentBlockWidth = parentBlock.offsetWidth;

let leftPosition = 0;

function moveChildBlock() {
    if (leftPosition < parentBlockWidth) {
        childBlock.style.left = `${leftPosition}px`;
        leftPosition += 1;
        requestAnimationFrame(moveChildBlock);
    } else {
        console.log('yes');
    }
    
}

moveChildBlock();

