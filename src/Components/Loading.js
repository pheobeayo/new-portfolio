import { motion } from "framer-motion";

const Loading = ({ setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="flex justify-center h-screen items-center flex-col gap-3">
      <motion.div animate={{ zoom: 0 }} transition={{ duration: 2, delay: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [0, 300, 300, 0] }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          {/* Animated logo mark */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
            style={{ background: "#FF5823", color: "#0a192f" }}
          >
            IS
          </div>
          <p className="text-[#FF5823] text-xs tracking-[0.4em] font-light ff">
            PIASTECH
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;