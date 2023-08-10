import React from 'react'
import css from './Hero.module.scss'
import {motion} from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial= "hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}
        className={`innerWidth ${css.container}`}>
            <div className={css.upperElements}>
                <motion.span 
                variants={fadeIn("right","tween",0.2,1)}
                className='primaryText'>Hey There, <br/> I am Himanshu.</motion.span>
                <motion.span 
                variants={fadeIn("left","tween",0.4,1)}
                className='secondaryText'>Software Engineer <br/> @Optum</motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up","tween",0.3,1)}
            className={css.person}>
                <motion.img style={{width : "350px",  height : "400px"}} variants={slideIn("up","tween",0.5,1.3)} src="./check.png" alt="" />
            </motion.div>

            <a href="mailto:mehndirattaji@gmail.com" className={css.email}>
                himanshu.mehndiratta199@gmail.com
            </a>

            <div className={css.lowerElements}>
                <motion.span variants={fadeIn("right","tween",0.3,1)} className = {css.experience}>
                    <div className="primaryText">2</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.span>
                <motion.span variants={fadeIn("left","tween",0.5,1)} className= {css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>FULL STACK WEB</span>
                    <span>DEVELOPER</span>
                </motion.span>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero