## Overview
This project showcases a TikTok clone, a web application developed as part of a [bounty project that required the use of JavaScript classes, switch statements, and try-catch-finally statements](https://app.stackup.dev/bounty/javascript-intermediate-campaign-bounty). The project aims to replicate the core functionality of TikTok, allowing users to view and interact with short video content, including liking, saving, sharing, and viewing comments. Additionally, there's a small mod to inlude 'Special Quest' - a way of nudging users to take action on their new insights related to the videos - by suggesting some small tasks to the user.

## Why a TikTok Clone?
Creating a TikTok clone provides an engaging and relevant context for implementing the required JavaScript concepts. At the point of writing, TikTok is a popular social media platform known for its user-friendly interface and dynamic video content. By mimicking its features, the project demonstrates how classes, switch statements, and try-catch-finally statements can be potentially applied in a real-world application.

## Running the Project
```
npm i && npm run dev
```

## Incorporating JavaScript Concepts

### 1. JavaScript Classes  
In `video.js`, JavaScript classes were utilized to structure the video data and handle different types of videos, including regular videos and videos with tasks. This uses the concept of JavaScript classes to create a structured and organized representation of video data, with a hierarchy of classes to model the data effectively. This approach not only promotes code reusability but also enhances maintainability and readability. The structure of the classes in video.js file is as follows:  
```
// Example of the Video and VideoTask classes
class Video {
    constructor(...properties) {
        // ... class properties and constructor
    }
}
// Inherit the Video class and add-on an additional attribute
class VideoTask extends Video {
    constructor(...properties, task) {
        super(properties);
        this.task = task;
    }
}

class VideoFeed {
    // constructor and properties

    addVideo(video) {
        // add video to the feed
    }

    getAvailableVideos() {
        // return the incoming Video and VideoTask
    }
}
```
### 2. Switch Statements 
In the `VideoSideActionBar.jsx` file,  JavaScript's switch statement concept is used to conditionally format and display counts based on different criteria. This not only enhances code readability but also allows for a more maintainable and scalable approach when dealing with various types of counts or a special text scenario with the VideoTask. 
```
const parseFormatCount = (item, count, boolean) => {
  // ... other formatting code

  switch(item) {
    case 'like':
    case 'save':
      return formatter.format(parseCount(count) + Number(boolean))
    case 'task':
      return 'Special Quest';
    default:
      return count
  }
}
```
In this snippet above, other than using the standard switch case and break, the project also leverages the concept of "early return" for optimisation. Furthermore, it also uses cascade cases for readability i.e. the 'like' and 'save' cases will have the same handling, hence no break or return in between those two cases.
### 3. Try-Catch-Finally Statements 
In the `BottomSheetComment.jsx` file, JavaScript's try, catch, and finally statements are used to handle potential errors that may occur during the asynchronous data fetching process. This error-handling approach ensures that the application remains robust and user-friendly, even in the face of unexpected issues. It is also a good place to handle loading states.
```
const fetchComments = async (controller) => {
  try {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/comments`, {
      signal: controller.signal,
    });
    const { comments } = await res.json();
    // ... (data manipulation)
  } catch (e) {
    console.error(e);
  } finally {
    setLoading(false);
  }
};

```
## Other Notable Points
### 1. Object Mapping Render 
In `VideoSideActionBar.jsx`, by using the common name in the object map and the element map, we can map through the object array and render programmically the buttons, without staticly declare the various components and individual setState.
```
  const [interact, setInteract] = useState({
    like: false,
    //... other sibling states
  })
  const iconMap = {
    like: {
      icon: faHeart,
      count: likes,
      color: '#FF0000',
    },
    //... other properties
    ...(Boolean(task) && {
      task: {
        icon: faTicket,
        count: 1,
        color: "#d5953b"
      }
    })
  }
  const handleIconClick = (e) => {
    const name = e.currentTarget.dataset.name;
    setInteract({
      ...interact,
      [name]: !interact[name]
    })
  }
  return (
      {Object.keys(iconMap).map((item, idx) => 
        <SidebarIcon
          key={`sidebar-icon-${idx}`}
          data-name={item}
          onClick={handleIconClick}>
          <Icon 
            icon={iconMap[item].icon} 
            style={iconColorMap(item)}
          />
          <p>{parseFormatCount(item, iconMap[item].count, interact[item])}</p>
        </SidebarIcon>
      )}
  )
```
Credits: [Bytebite](https://youtu.be/-yIsQPp31L0?si=CpoYyEBnUahGLoLj&t=480)

This map and render even works for rendering components! Credits: [collegewap](https://dev.to/collegewap/how-to-render-array-of-components-in-react-fma).
```
  const bottomSheetComponents = [
    {
      name: 'comment',
      component: BottomSheetComment
    },
    //... remaining objs
  ]
    {bottomSheetComponents.map((item,idx) => 
        <item.component
          //.. components attributes
        />
    )}
```
### 2. Addition of Compacted Number 
In `VideoSideActionBar.jsx`, built-in js `NumberFormat` was used to get compact numbers e.g. 5449->5.4K. The next part was to parse a string compact number back into number for calculation. E.g. 5449 + 1 -> 5.5K (rounded). 
```
const parseFormatCount = (item, count, boolean) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact'})

  //... other switch case code
      return formatter.format(parseCount(count) + Number(boolean))
  //... other switch case code
}

const parseCount = (count) => {
  if (typeof count === 'string') {
    const multipliers = {k: 1e3, m: 1e6, b: 1e9, t: 1e12};
    const lastChar = count.at(-1).toLowerCase()
    if (lastChar in multipliers) {
      return parseFloat(count) * multipliers[lastChar]
    }
    return parseInt(count);
  }
  return count;
}
```
In the `parseCount` function, some interesting techniques I discovered online were:
* multiplier map with shorthand way to declare long numbers e.g. 1e3 -> 1000
* `.at(-1)` syntax to use on arrays to get last element without using `[].length - 1`
* `parseFloat()` automatically removes the ending character and return the decimal

Credits: [Fireship on Compact Formatter](https://www.youtube.com/watch?v=FUngCjDzFDo) | [Bytebite on .at()](https://youtu.be/YH6ui_dG7Ow?si=JUvoun5lXFdt5aIR) | [stackoverflow on 1e3 1e9](https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900) | [stackoverflow on parse compact number for calculation](https://stackoverflow.com/questions/32636869/convert-string-1k-string-to-1000-number)

### 3. Abort Controller
In `BottomSheetComment.jsx`, the `AbortController` was used to  to cancel the fetch request if the component unmounts or if a new request is initiated midway through the previous API call. Granted, we can disable the button to prevent spamming but that will make the UI unresponsive. As such, using this controller not only improves error handling but also resource management and performance optimization.
```
useEffect(() => {
    if (isOpen) {
        const controller = new AbortController();
        fetchComments(controller)
        return () => controller.abort()
    }
}, [isOpen])
...
const fetchComments = async (controller) => {
    // ... try clause
    const res = await fetch(`https://dummyjson.com/comments`, {
        signal: controller.signal
    })
    // ... catch finally clause
}
``` 
 Finally, having fetched and used the controller, we will also need to cleanup controller as well. Credits: [ByteBite](https://youtu.be/-yIsQPp31L0?si=z2POA_WzCD3Ri2xB&t=2540).
### 4. Loading Shimmer UI
In `LoadingSkeleton.jsx`, the shimmer effect was concisely introduced with the css below. No additional library was used for the shimmer effect.
```
const SkeletonBox = styled.div`
    //... other styles

  &::after {
    //... other styles
    background-image: linear-gradient(
      90deg,
      rgba(255,255,255, 0) 0,
      rgba(255,255,255, 0.2) 20%,
      rgba(255,255,255, 0.5) 60%,
      rgba(255,255,255, 0)
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
```
credits: [CodePen](https://codepen.io/maoberlehner/pen/bQGZYB)
### 5. Swiper
In `App.jsx`, the [Swiper](https://swiperjs.com/demos) library succinctly allows us to achieves the same tiktok swiping experience. 
```
<StyledSwiper 
    direction={'vertical'}
    slidesPerView={1}
    mousewheel={true}
    modules={[Mousewheel]}
    className="mySwiper"
>
    // ... children
</StyledSwiper>
```
Interestingly, I came to know of this library while inspecting elements on the official tiktok.com website. I'm not sure why, but most of the tiktok clones found online (at the time of writing) aren't using this library to achieve the swiping effect. 
### 6. styled-components
Why not tailwindcss? I understand it's all the hype right now, but I just work faster with css and prefer to keep my html clean.

## Acknowledgements
This project was forked from another TikTok clone to speed up development process. However, I still spent a substancial amount of time to research to make various adjustments and improvements that are relevant to the bounty rerequirements. I've also included wherever possible the sources of inspirations in the writeup.