import React from 'react'

import photo from '../../assets/Shopping_about.jpg'
import photo2 from '../../assets/About_photo.jpg'
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
              <img alt="" className={classes.imageAnnounce} src="https://unice.pixelstrapthemes.vercel.app/assets/images/event/1.jpg" />
              <img alt=""className={classes.imageAnnounce} src="https://unice.pixelstrapthemes.vercel.app/assets/images/event/1.jpg" />
              <img alt="" className={classes.imageAnnounce} data-tilt="true" data-tilt-max="3" data-tilt-perspective="500" data-tilt-speed="400" src={photo2} /></div>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.text3}>
            <div className={classes.format}>
              <div className={classes.formatS}>
                <h6 className={classes.text3}><span>event progress</span></h6>
              </div>
              <div className={classes.formatH}>
                <h3 className={classes.text4}>Welcome To Clothe Shop</h3>
              </div>
              <div className={classes.formatSub}>
                <p className={classes.title3}>With the internet came many wonders. It melted barriers, and before you knew,
                  things from far off lands were getting delivered right to your doorstep. Clothe Shop was a pioneer in
                  starting an online business community that catered to women’s fashion needs way before this turned
                  into an entire industry. Clothe Shop has taken it a notch higher by shipping clothes that are made in
                  the US, UK, China, Europe, etc., and delivering them to India and around the globe in just a matter of
                  a few days. </p>
              </div>
              <a className={classes.botton} href="#">READ MORE</a>
            </div>
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
