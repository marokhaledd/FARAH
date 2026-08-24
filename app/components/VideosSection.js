"use client";

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer.js";

export default function VideosSection({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section style={{ padding: "40px 20px 70px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "44px 40px"
        }}
      >
        {videos.map((video, i) => (
          <motion.div
            key={video.src + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <VideoPlayer video={video} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
