// Your code here
require('./helpers.js');

describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger');
  });

  it('moves the DODGER to the left', () => {
    let left = dodger.style.left;
    left = parseInt(left);

    moveDodgerLeft();

    let newPosition = dodger.style.left;
    newPosition = parseInt(newPosition);

    if (left > 0) {
      expect(newPosition).to.be.below(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});

describe('moveDodgerRight()', () => {
  beforeEach(() => {
    dodger = document.getElementById('dodger');
  });

  it('moves the DODGER to the right', () => {
    let left = dodger.style.left;
    left = parseInt(left);

    moveDodgerRight();

    let newPosition = dodger.style.left;
    newPosition = parseInt(newPosition);

    if (left < 360) {
      expect(newPosition).to.be.above(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});

// Define the moveDodgerLeft function
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Define the moveDodgerRight function
function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}