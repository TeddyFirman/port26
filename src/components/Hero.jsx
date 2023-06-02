// import { motion } from 'framer-motion';

// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
// import { EarthCanvas } from './canvas';

// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Mengatur state isMobile berdasarkan ukuran layar saat komponen dimuat
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     handleResize();

//     // Event listener untuk mengubah state isMobile saat ukuran layar berubah
//     window.addEventListener('resize', handleResize);

//     // Membersihkan event listener saat komponen dibongkar
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <section className="relative w-full h-screen mx-auto xs:bottom-12">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-4">
//           <div className="w-5 h-5 rounded-full bg-gradient" />
//           <div className="w-1 sm:h-80 h-40 bg-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#ff6cff]">Teddy Firman</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I am a Backend Developer
//           </p>
//         </div>
//       </div>

//       {isMobile && <ComputersCanvas />}
//       <ComputersCanvas />

//       {/* <EarthCanvas /> */}


//       <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center xs:top-200">
//         <a href="#about">
//           <div className="w-[33px] h-[51px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-4">
//             <motion.div
//               animate={{
//                 y: [0, 19, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero


import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
// import { MobileComputersCanvas } from './canvas';
import { EarthCanvas } from './canvas';

const Hero = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Mengatur state isMobile berdasarkan ukuran layar saat komponen dimuat
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 767);
  //   };

  //   handleResize();

  //   // Event listener untuk mengubah state isMobile saat ukuran layar berubah
  //   window.addEventListener('resize', handleResize);

  //   // Membersihkan event listener saat komponen dibongkar
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      </div>

      {/* Tampilkan ComputersCanvas jika tidak mobile */}
      {!isMobile && <ComputersCanvas />}

      {/* Tampilkan MobileComputersCanvas jika mobile */}
      {isMobile && <ComputersCanvas isMobile={isMobile} />}
      {/* <ComputersCanvas isMobile={isMobile} /> */}
      

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

export default Hero;
