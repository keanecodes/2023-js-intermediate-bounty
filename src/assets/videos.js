import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"
import video3 from "./videos/video3.mp4"
import video4 from "./videos/video4.mp4"

export class Video {
  constructor(url, profilePic, username, description, song, shares) {
    this.url = url;
    this.profilePic = profilePic;
    this.username = username;
    this.description = description;
    this.song = song;
    this.shares = shares;
  }
}

export class VideoTask extends Video {
  constructor(url, profilePic, username, description, song, shares, title) {
    super(url, profilePic, username, description, song, shares, title);
    this.title = title;
  }
}
  
export class VideoFeed {
  constructor() {
    this.videos = [];
  }

  addVideo(video) {
    this.videos.push(video);
  }

  getAvailableVideos() {
    videoUrls.forEach((video) => {
      const {url, profilePic, username, description, song, shares, title} = video
      this.addVideo(new Video(url, profilePic, username, description, song, shares, title))
    });
    return videoUrls
  }
}
  
export const videoUrls = [
  {
    url: video3,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    username: 'wojciechtrefon',
    description: '#programming #softwareengineer #vscode #programmerhumor #programmingmemes',
    song: 'help so many people are using my sound - Ezra',
    shares: 117,
  },
  {
    url: video2,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
    username: 'dailydotdev',
    description: 'Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes',
    song: 'tarawarolin wants you to know this isnt my sound - Chaplain J Rob',
    shares: 420,
  },
  {
    url: video4,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    username: 'faruktutkus',
    description: 'Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ',
    song: 'orijinal ses - Computer Science',
    shares: 967,
  },
  {
    url: video1,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
    username: 'csjackie',
    description: 'Lol nvm #compsci #chatgpt #ai #openai #techtok',
    song: 'Original sound - Famed Flames',
    shares: 1,
  },
];
  

