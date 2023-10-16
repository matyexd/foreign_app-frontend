export const AUTH_URLS = ["/sign_in/", "/sign_up/", "/password_reset/"];

export const AppPath = Object.freeze({
  authUrl: AUTH_URLS,
  main: "/",
  signIn: "/sign_in/",
  signUp: "/sign_up/",
  resetPassword: "/password_reset/",

  profile: "/profile/:tabValue/",
  profileSettings: "/profile/settings/",
  profileResetPassword: "/profile/reset_password/",
  profileTeaching: "/profile/teaching/",

  schools: "/schools/",
  education: "/education",
  educationCourses: "/education/:id",
  communityCourses: "/community_courses/",
  purchasedCourses: "/purchased_courses/",



  // teacher
  myCourses: "/teacher/my-courses/",
  myStudents: "/teacher/my-students",
});

export const AuthUrl = Object.freeze({
  // postLogin: "/auth/login",
  // logout: "/auth/logOut",
  // register: "/auth/signUp",
  postGetCode: '/security/sms'
});
