const fakeUser = {
  name: 'Hello kitty',
  age: '18',
};

/** GET /api/currentUser */
export async function currentUser() {
  // TODO: Hanle your api to here
  // fake user data
  return {
    ...fakeUser,
  };
}

/** POST /api/login/outLogin */
export async function outLogin() {
  // TODO: Hanle your api to here
  return true;
}

/** POST /api/login/account */
export async function login() {
  // TODO: Hanle your api to here
  return true;
}
