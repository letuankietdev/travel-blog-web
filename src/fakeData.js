import {faker} from '@faker-js/faker'


function createData () {
  let data = [];
  for(var i = 0; i<= 40; i++ ){
    data.push({
      id: i+1,
      name: faker.name.findName(),
      image: i % 2 ? faker.image.food() : faker.image.image(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraph(),
    })
  }
  return data;
}

function createDataFeed () {
  let data = [];
  for(var i = 0; i<= 40; i++ ){
    data.push({
      id: i+1,
      user: {
        id: i+11,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        
      },
      content: {
        statusContent: faker.lorem.paragraph(),
        image:  i % 2 ? faker.image.food() : i % 3 ? faker.image.image() : null, 
        totalLove: faker.datatype.number(),
        liked:   i % 2  ? true : false,
      }
    })
  }
  return data;
}

function createChatData () {
  let data = [];
  for(var i = 0; i<= 40; i++ ){
    data.push({
      id: i+1,
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      isOnline: i % 2 ? true : false,
    })
  }
  return data;
}

const FEED_DATA = createDataFeed();

const STORY_DATA = createData();

const DATA_CHAT_LIST =  createChatData();
export {
  STORY_DATA,
  FEED_DATA,
  DATA_CHAT_LIST,
}