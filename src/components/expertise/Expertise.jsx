import React from 'react'
import css from './Expertise.module.scss'
import { WhatDoIHelp, educationExperience } from '../../utils/data'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'

const Expertise = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial= "hidden"
    whileInView="show"
    viewport={{once :false,amount: 0.25}}
    className={css.wrapper}>
        <a className="anchor" id="expertise"></a>
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                {educationExperience.map((expertise,index)=>{
                    return (<motion.div 
                    variants={fadeIn("right","tween",(index+1)*0.2,1)}
                    className={css.experience} key={index}>
                        <div className='flexCenter' style={{background: expertise.bg}}>
                            <expertise.icon size = {25} color='white'/>
                        </div>
                        <div>
                            <span>
                                {expertise.name}
                            </span>
                            <span className='secondaryText'>
                                {expertise.projects}
                            </span>
                        </div>
                    </motion.div>)
                })}
            </div>
            <motion.div variants={textVariant(0.5)} className={css.rightSide}>
                <div className='primaryText'>Personal Info</div>
                {WhatDoIHelp.map((para,i)=> <div className='secondaryText' key = {i}>{para}</div>) }
                {/* <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText'>Projects</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>190+</span>
                        <span className='secondaryText'>Happy Clients</span>
                    </div>
                </div> */}
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Expertise