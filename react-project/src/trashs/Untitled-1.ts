
import {React,useState} from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import useStyles from './styles';

const sliderItems = [
  {
    id: 1,
    img: "https://litemf.com/ru/journal/wp-content/uploads/2018/07/1-7.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];
const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const classes = useStyles(props);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className={classes.container}> 
      <div className={classes.arrow_left}
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div  className={classes.wrapper} slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div className={classes.slide} bg={item.bg} key={item.id}>
            <div className={classes.imgContainer}>
              <img className={classes.image} src={item.img} />
            </div>
            <div className={classes.infoContainer}>
              <div className={classes.title}>{item.title}</div>
              <div className={classes.desc}>{item.desc}</div>
              <div className={classes.button}>SHOW NOW</div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.arrow_right} direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};
    export default Slider;