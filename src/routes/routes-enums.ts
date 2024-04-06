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
  createCourse: "/teacher/create-course/",
  myStudents: "/teacher/my-students",

  // courses
  courseView: "/education/:teacherId/:courseId"
});

export const CoursesUrl = Object.freeze({
  getMyCourses: "courses",
  studentCourses: "student_courses",
  assignStudent: "assign-course",
  createCourse: "course/add",
  courseById: "course/", //  + id

})

export const StudentsUrl = Object.freeze({
  getStudentByTeacher: "getStudents",
  untieStudent: "untie"
})

export const TeacherUrl = Object.freeze({
  inviteStudent: "invite",
  getTeachers: "getTeachers",
})

export const AuthUrl = Object.freeze({
  // postLogin: "/auth/login",
  // logout: "/auth/logOut",
  // register: "/auth/signUp",
  postGetCode: "/security/sms",
  postLogin: "/security/login",
});
