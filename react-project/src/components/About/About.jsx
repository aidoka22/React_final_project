import React from 'react'

import photo from '../../assets/Shopping_about.jpg'
import photo2 from '../../assets/About_photo.jpg'
import photo3 from '../../assets/need.jpg'

import useStyles from './styles';


const About = () => {
  const classes = useStyles();
  return (
  <div>
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={photo} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.logo_name}> Clothes shop </div>
        <div className={classes.title}>
          BEAUTY IS ABOUT SHOPPING
        </div>
        <div className={classes.desc}>The secret idea she was forming of an afterlife gave her the foothold she needed
          to
          endure the agonies to come, a newfound courage and optimism which found instant expression through SHOPPING.
        </div>
      </div>
    </div>
    <section className={classes.container2}>
      <div className={classes.container3}>
        <div className={classes.row}>
            <div className={classes.maintitle}>
              <h2 >About event</h2>
            </div>
        </div>
        <div className={classes.imgContainer2}>
            <div className={classes.announcing}>
              <img alt="" className={classes.imageAnnounce1} src={photo3} />
              <img alt=""className={classes.imageAnnounce2} src={photo3} />
              <img alt="" className={classes.imageAnnounce3} src={photo2} /></div>
          <div className={classes.textContainer}>
            
              <div className={classes.formatS}>
                <h6 className={classes.text3}><span>event progress</span></h6>
              </div>
              <div className={classes.formatH}>
                <h3 className={classes.text4}>Welcome To Clothe Shop</h3>
              </div>
              <div className={classes.formatSub}>
                <p className={classes.title3}>When shopping, most people have a short-list of the best online clothing stores that they refer back to time and time again. However, in those (not so) rare instances when you can’t find exactly what you’re looking for at your go-to destinations, coming up with alternatives on the spot can be tough. The good news is that there are more than enough options to choose from. So much so, that it can be overwhelming. So let's begin with that stuff </p>
              </div>
              <div className={classes.button}>START</div>
          </div>
        </div>
      </div>
    </section>
    {/* <ul className={classes.infosContainer}>
      <li className={classes.info1Container}>
        <img src="https://i.ibb.co/9GKJpJg/bottom1.png" alt="Addings" width="240" height="120" />
        <div className={classes.topic}>Microsoft Teams</div>
        Общайтесь, проводите собрания, звоните и сотрудничайте.
      </li>
      <li className={classes.info1Container}>
        <img src="https://i.ibb.co/yfyHWtj/bottom2.png" alt="Addings" width="240" height="120" />
        <div className={classes.topic}>Microsoft Edge</div>
        Потрясающая производительность, больше конфиденциальности,продуктивности и дополнительных возможностей.
      </li>
      <li className={classes.info1Container}>
        <img src="https://i.ibb.co/hFrgr6H/bottom3.png" alt="Addings" width="240" height="120" />
        <div className={classes.topic}>Microsoft OneDrive</div>
        Сохраняйте свои файлы и фотографии на OneDrive — они будут доступны с любого устройства и где угодно.
      </li>
      <li className={classes.info1Container}>
        <img src="https://i.ibb.co/VD19Pzh/bottom4.png" alt="Addings" width="240" height="120" />
        <div className={classes.topic}>Обновление Windows 10</div>
        Предоставляя новые функции, которые помогут вам успевать больше, общаться чаще и экономить время.
      </li>
    </ul> */}
  </div>
  )
}
export default About