import { faker } from "@faker-js/faker";

const createPostData = () => {
  let imgBox = [];
  for (let i = 1; i <= Math.floor(Math.random() * 5) + 1; i++) {
    imgBox.push(faker.image.url());
  }
  return {
    postId: faker.string.uuid(),
    post_date: faker.date.between({ from: "2015-01-01", to: "2023-05-25" }),
    user_name: faker.person.firstName(),
    post_content: faker.lorem.lines(Math.floor(Math.random() * 10) + 6),
    img_box: imgBox,
  };
};

const GenerateData = (numUsers = 40) => {
  return Array.from({ length: numUsers }, createPostData);
};
export const POST_DATA = GenerateData(43);

// export const POST_DATA = [
//   {
//     post_date: faker.date.between("2015-01-01", "2023-05-25"),
//     user_name: faker.person.fullName(),
//     post_content: faker.lorem.lines({
//       min: 5,
//       max: Math.floor(Math.random()) * 10 + 6,
//     }),
//     img_box: imgBox,
//   },
// ];
