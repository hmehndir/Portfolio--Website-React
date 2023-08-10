import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'

export const Portfolio = () => {
  return (
    <motion.section 
    className={`paddings ${css.wrapper}`}
    variants={staggerChildren}
    initial = "hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    >
        <a className="anchor" id="portfolio"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <div className="primaryText">
                    My Latest Projects
                </div>
                <span className="secondaryText">
                    <a href="https://github.com/hmehndir" target='_blank'>Explore More!</a>
                </span>
            </div>


            {/* Images */}

            <div className={`flexCenter ${css.showCase}`}>
                <motion.img
                variants={fadeIn("up","tween",0.5,0.6)}
                src="./project_1.png"
                alt = "project"
                />
                
                <motion.img
                variants={fadeIn("up","tween",0.7,0.6)}
                src="./project_2.png"
                alt = "project"
                />


                <motion.img
                variants={fadeIn("up","tween",0.9,0.6)}
                src="./project_3.png"
                alt = "project"
                />
            
            </div>
        </div>
    </motion.section>
  )
}
