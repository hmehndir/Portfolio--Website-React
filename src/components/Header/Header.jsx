import React, { useEffect, useRef, useState } from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const menuRef = useRef(null)
    const [menuOpen,setMenuOpen] = useState(false);
    
    
    const headerShadow = useHeaderShadow();
    
    //to handle click outside of sidebar on mobile
    useOutsideAlerter({
        menuRef,
        setMenuOpen,
      });

  return (
    <motion.div 
    initial = "hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount : 0.25}}
    className={`bg-primary paddings ${css.wrapper}`}
    style={{boxShadow : headerShadow}}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Himanshu Mehndiratta
            </div>
            <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpen)}
        >
          <li><a href="#personal">Personal Info</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#people">Testimonials</a></li> */}
          <li className={`flexCenter ${css.phone}`}>
            <p><a href='tel:9015249851'>9015249851</a></p>
            <BiPhoneCall size={"40px"}/>
          </li>
        </ul>
             {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;