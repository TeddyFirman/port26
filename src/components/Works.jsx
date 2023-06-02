
import React, { useEffect, useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = React.memo(({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[359px]"
      >
        <div className="relative w-full h-1/3 sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
})

const Works = () => {
  const [numColumns, setNumColumns] = useState(3); // Atur jumlah kolom default

  useEffect(() => {
    // Fungsi untuk mengubah jumlah kolom berdasarkan lebar layar
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumColumns(2); // Ubah jumlah kolom menjadi 2 pada perangkat seluler
      } else {
        setNumColumns(3); // Kembalikan jumlah kolom menjadi 3 pada perangkat yang lebih besar
      }
    };

    window.addEventListener('resize', handleResize); // Tambahkan event listener untuk deteksi perubahan lebar layar

    // Panggil fungsi handleResize saat komponen mount
    handleResize();

    // Clean up event listener saat komponen unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described which is stored on my github. It reflects my ability to solve complex problems, work with different technologies and manage projects effectively.
        </motion.p>
      </div>

      <div className={`mt-20 flex flex-wrap gap-7 sm:gap-12 md:gap-12 lg:gap-12 xl:gap-12 grid-cols-${numColumns}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");


// INI BISA DIBUKA NG HPKU

// import React from 'react';
// import { Tilt } from "react-tilt";
// import { motion } from 'framer-motion';

// import { styles } from '../styles';
// import { github } from '../assets';
// import { SectionWrapper } from '../hoc';
// import { projects } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';

// const ProjectCard = React.memo(({ index, name, description, tags, image, source_code_link }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring")}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className="bg-tertiary p-5 rounded-2xl w-full sm:w-[340px]"
//       >
//         <div className="relative w-full h-1/2 sm:h-[230px]">
//           <img 
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img 
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-xl sm:text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-sm sm:text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-sm sm:text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   )
// })

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My portfolio</p>
//         <h2 className={styles.sectionHeadText}>Projects</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-base sm:text-[17px] max-w-3xl leading-[30px]"
//         >
//           Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described which is stored on my github. It reflects my ability to solve complex problems, work with different technologies and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-10 sm:mt-20 flex flex-wrap gap-12 mb-7">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={`project-${index}`}
//             index={index}
//             {...project}
//           />
//         ))}
//       </div>
//     </>
//   )
// }

// export default SectionWrapper(Works, "");


// VERSI NYAR!!!!!!!!!!!!!!!!!!!!!!

