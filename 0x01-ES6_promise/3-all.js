import {
  uploadPhoto,
  createUser,
} from './utils';

function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();
  Promise.all([p1, p2]).then((res) => {
    const data = Object.assign(res[0], res[1]);
    console.log(`${data.body} ${data.firstName} ${data.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}

export default handleProfileSignup;
