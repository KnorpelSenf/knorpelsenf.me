import { Smallblog } from "@tayzendev/smallblog";

export default new Smallblog({
  dataFolder: ".",
  siteTitle: "KnorpelSenf's Blog",
  indexTitle: "KnorpelSenf's Blog",
  favicon: "posts/fractal.jpg",
  nav: [
    { name: "Email", path: "mailto:shtrog@gmail.com" },
    { name: "GitHub", path: "https://github.com/KnorpelSenf" },
    { name: "Telegram", path: "https://t.me/KnorpelSenf" },
  ],
});
