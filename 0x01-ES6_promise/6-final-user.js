import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => {
    response.map((data) => ({
      status: data.status,
      value: data.status === 'fulfilled' ? data.value : String(data.reason),
    }));
  });
}
