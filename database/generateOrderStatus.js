const status = ['Success', 'Fail'];
const statusWeight = [0.95, 0.05];

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateStatusList = (list, weight) => {
  const weightList = [];

  for (let i = 0; i < weight.length; i++) {
    const multiples = weight[i] * 100;
    for (let j = 0; j < multiples; j++) {
      weightList.push(list[i]);
    }
  }
  return weightList;
};

const weightStatusList = generateStatusList(status, statusWeight);
console.log(weightStatusList);

const getRandomStatus = () => {
  const randomNum = rand(0, weightStatusList.length - 1);
  return weightStatusList[randomNum];
};

module.exports.getRandomStatus = getRandomStatus;
