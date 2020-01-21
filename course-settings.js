const courseSettings = {
  language: "en",
  name: "Java Programming",
  siteUrl: "https://java-programming.mooc.fi",
  subtitle: "A free online course on learning Java",
  slug: "java-programming-i",
  tmcCourse: "java-programming-i",
  quizzesId: "TODO",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About the course",
      path: "/",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    { separator: true, title: "Introduction to programming" },
  ],
  sidebarFuturePages: [
    { title: "Part 2", tba: "28.1." },
    { title: "Part 3", tba: "4.2." },
    { title: "Part 4", tba: "11.2." },
    { title: "Part 5", tba: "18.2." },
    { title: "Part 6", tba: "25.2." },
    { title: "Part 7", tba: "3.3." },
    { title: "Part 8", tba: "17.3." },
    { title: "Part 9", tba: "24.3." },
    { title: "Part 10", tba: "31.3." },
    { title: "Part 11", tba: "7.4." },
    { title: "Part 12", tba: "21.4." },
    { title: "Part 13", tba: "28.4." },
    { title: "Part 14", tba: "5.5." },
  ], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: false,
  useNewPointsVisualization: false
}

module.exports = {
  default: courseSettings,
}