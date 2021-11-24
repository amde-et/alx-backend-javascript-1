import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  const data = await Promise.allSettled([p1, p2]).then((results) => results.map((result) => {
    if (result.status !== 'fulfilled') {
      return {
        status: 'rejected',
        value: result.reason.toString(),
      };
    }
    return result;
  }));

  return Promise.resolve(data);
}

export default handleProfileSignup;
