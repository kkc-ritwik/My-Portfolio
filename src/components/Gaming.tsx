// import { motion } from "framer-motion";
// import { fadeInUp, staggerContainer } from "../utils/animations";

// const Gaming = () => {
//   return (
//     <section id="gaming" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//          🎮 My Passion for Competitive Gaming
//         </motion.h2>

//         <motion.div
//           className="max-w-4xl mx-auto text-center"
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <motion.p 
//             className="text-lg text-gray-700 mb-10"
//             variants={fadeInUp}
//           >
//             Check out my gameplay on my YouTube channel!
//           </motion.p>
          
//           <motion.div 
//             className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8 mx-auto"
//             variants={fadeInUp}
//           >
//             <iframe
//               src="https://www.youtube.com/embed/OfHGK3Pq08o"
//               title="My Gameplay Video"
//               className="w-full h-full"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Gaming;


import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { FaGamepad, FaTwitch, FaYoutube, FaSteam } from "react-icons/fa";
import { SiEpicgames, SiRiotgames } from "react-icons/si";

const Gaming = () => {
  const platforms = [
    { icon: <FaYoutube className="text-red-600" />, name: "YouTube" },
    { icon: <FaTwitch className="text-purple-600" />, name: "Twitch" },
    { icon: <FaSteam className="text-blue-600" />, name: "Steam" },
    { icon: <SiEpicgames className="text-black" />, name: "Epic" },
    { icon: <SiRiotgames className="text-red-500" />, name: "Riot" },
  ];

  const games = [
    "Valorant", "CS:GO", "Apex Legends", "Fortnite", "Call of Duty"
  ];

  return (
    <section id="gaming" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-500 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-blue-500 animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-500 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-red-500 animate-ping"></div>
      </div>
      
      {/* Gaming grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNi0yNGgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0tNiAwSDE0di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTI0IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyem02IDBoLTR2LTJoNHYyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <FaGamepad className="text-5xl md:text-6xl text-purple-500 mr-4" />
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Passion for Gaming
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 mb-12 border border-white/20 shadow-xl"
            variants={fadeInUp}
          >
            <motion.p 
              className="text-lg text-gray-200 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              As a passionate gamer, I've spent countless hours honing my skills in competitive esports. 
              Gaming isn't just a hobby for me—it's a way to sharpen my strategic thinking, teamwork, 
              and quick decision-making abilities.
            </motion.p>
            
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden shadow-[0_0_15px_rgba(123,58,180,0.5)] mb-8 mx-auto transform transition-all hover:scale-[1.02] duration-300"
              variants={fadeInUp}
              whileHover={{ 
                boxShadow: "0 0 25px rgba(123,58,180,0.8)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/OfHGK3Pq08o"
                title="My Gameplay Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
          
          {/* Gaming stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Hours Played", value: "5000+" },
              { label: "Tournaments", value: "50+" },
              { label: "Wins", value: "200+" },
              { label: "Rank", value: "Diamond" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl text-center border border-purple-500/30 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(123,58,180,0.4)" }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-purple-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Games I play */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">Games I Play</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {games.map((game, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {game}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Gaming platforms */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Find Me On</h3>
            <div className="flex justify-center space-x-6">
              {platforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-2">{platform.icon}</span>
                  <span className="text-sm text-gray-300">{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to My Channel
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gaming;
