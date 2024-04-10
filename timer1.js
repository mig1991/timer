const args = process.argv.slice(2);
const unfilteredTimeInSeconds = args;

if (unfilteredTimeInSeconds === 0) {
  process.exit();
}

const timeInSeconds = unfilteredTimeInSeconds.filter((input) => !isNaN(input));

timeInSeconds.forEach(function (seconds) {
  let milliseconds = seconds * 1000;
  if (milliseconds < 0) {
    console.log(`you can't go backwards in time`);
    return;
  }

  setTimeout(() => {
    process.stdout.write("beep");
  }, milliseconds);
});
