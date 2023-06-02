import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { EarthCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto xs:bottom-12">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-gradient" />
          <div className="w-1 sm:h-80 h-40 bg-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#ff6cff]">Teddy Firman</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Backend Developer
          </p>
        </div>
        <ComputersCanvas
          scale={0.68}
          position={[0, -3.05, -1.2]}
        />
      </div>



      {/* <EarthCanvas /> */}


      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center xs:top-200">
        <a href="#about">
          <div className="w-[33px] h-[51px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-4">
            <motion.div
              animate={{
                y: [0, 19, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero