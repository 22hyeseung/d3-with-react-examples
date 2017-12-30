const faker = require('faker');
const fs = require('fs');
const _ = require('lodash');

faker.locale = 'en';

let data = [];

_.range(1, 30).forEach(index => {
  data.push({
    timestamp: faker.date.recent(),
    score: faker.random.number({ min: 40, max: 99 }),
    sensor: {
      co2: faker.random.number({ min: 10, max: 300 }),
      dust: faker.random.number({ min: 30, max: 300 }),
      temp: faker.random.number({ min: 0, max: 30 }),
      humid: faker.random.number({ min: 30, max: 300 }),
      voc: faker.random.number({ min: 10, max: 300 }),
    },
  });
});

// 날짜 순으로 정렬
data = _.sortBy(data, o => {
  return new Date(o.timestamp);
});

const db = { data };

// fs.writeFile('file이름', file에 쓸 내용)
fs.writeFile('db.json', JSON.stringify(db));
