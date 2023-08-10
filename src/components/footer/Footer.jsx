import React from 'react'
import css from './Footer.module.scss'
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial = "hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className={`paddings ${css.wrapper}`}>

      <motion.div 
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Any query? <br/> Let's Connect!!
          </span>

          <span className="primaryText">
            Start by <a href='mailto:himanshu.mehndiratta199@gmail.com'>saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">
              Contact Information
            </span>
          </div>

          <div className={css.menu}>
            <li>Bengaluru, Karnataka</li>
            <li>+91 9015249851</li>
            <li>himanshu.mehndiratta199@gmail.com</li>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer