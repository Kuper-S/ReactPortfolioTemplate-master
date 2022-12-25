import React from 'react';
import Style from './Home.module.scss';
import "./Home.css";
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Resume from "../../assets/AVIHAIKUPERBERG_RESUME.pdf"
import Avatar from "../../assets/avatar-hello.png";


export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={Avatar} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '44vh', md: '44vh'}}
              borderRadius={'50%'} p={'0.22rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}

              />
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <h3>Wanna know me better? so do I!</h3>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
            
         </Box>
         <Box display={'flex'} justifyContent={'center'} mt={'1rem'}>
               <a href={Resume} download>
                  <button className="button-24">Download CV</button>
                  
               </a>
            </Box>

      </Box>
      
   )
}


