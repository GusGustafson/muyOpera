interface Roles {
  USER: number;
  ADMIN: number;
  ALL_USERS: number[];
}

export const roles: Roles = {
  USER: 0,
  ADMIN: 1,
  ALL_USERS: [0, 1],
};
