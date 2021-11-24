import {
  uploadPhoto,
  createUser,
} from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  return Promise.all([p1, p2]).then((data) => {
    const res = Object.assign(...data);
    console.log(`${res.body} ${res.firstName} ${res.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
