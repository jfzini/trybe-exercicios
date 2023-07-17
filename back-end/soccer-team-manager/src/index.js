const { readData } = require('./utils/fsUtils');

const main = async () => {
  const staff = await readData('./data/staff.json');
  console.log(staff);
}

main();