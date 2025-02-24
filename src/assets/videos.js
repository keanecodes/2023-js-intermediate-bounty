import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"
import video3 from "./videos/video3.mp4"
import video4 from "./videos/video4.mp4"

export class Video {
  constructor(url, profilePic, username, description, song, shares, likes, comments, saves) {
    this.url = url;
    this.profilePic = profilePic;
    this.username = username;
    this.description = description;
    this.song = song;
    this.shares = shares;
    this.likes = likes;
    this.saves = saves;
    this.comments = comments;
  }
}

export class VideoTask extends Video {
  constructor(url, profilePic, username, description, song, shares, likes, comments, saves, task) {
    super(url, profilePic, username, description, song, shares, likes, comments, saves);
    this.task = task;
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
      const {url, profilePic, username, description, song, shares, saves, comments, likes} = video
      Boolean(video.task) 
        ? this.addVideo(new VideoTask(url, profilePic, username, description, song, shares, likes, comments, saves, video.task))
        : this.addVideo(new Video(url, profilePic, username, description, song, shares, likes, comments, saves))
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
    likes: 5449,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: video4,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    username: 'faruktutkus',
    description: 'Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ',
    song: 'orijinal ses - Computer Science',
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: video2,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
    username: 'dailydotdev',
    description: 'Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes',
    song: 'tarawarolin wants you to know this isnt my sound - Chaplain J Rob',
    likes: '13.4K',
    task: "Try advanced console.log() like console.error() or console.table() ",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: video1,
    profilePic: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
    username: 'csjackie',
    description: 'Lol nvm #compsci #chatgpt #ai #openai #techtok', // non task
    song: 'Original sound - Famed Flames',
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
];
  

