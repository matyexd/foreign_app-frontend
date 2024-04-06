export const ROLES = Object.freeze({
  STUDENT: "ROLE_USER",
  TEACHER: "ROLE_TEACHER",
  ADMIN: "ROLE_SUPER_ADMIN",
});

export type RolesType = (typeof ROLES)[keyof typeof ROLES];

export const ROLES_ITEMS = {
  STUDENT: {
    code: ROLES.STUDENT,
    name: "Студент",
  },
  TEACHER: {
    code: ROLES.TEACHER,
    name: "Преподаватель",
  },
};

export type RolesItemTypes = {
  code: RolesType;
  name: string;
};

export type RolesItemsTypes = {
  [key in "STUDENT" | "TEACHER" | "ADMIN"]: RolesItemTypes;
};
