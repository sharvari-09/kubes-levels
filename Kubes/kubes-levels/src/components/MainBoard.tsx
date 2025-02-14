import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../font.css";

const MainBoard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      if (count < kubernetesQuiz.questions.length - 1) {
        setCount((prevCount) => prevCount + 1);
        setSelectedOption(null);
        setTimeLeft(30);
      } else {
        setIsSubmitted(true);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, count]);

  const kubernetesQuiz = {
    questions: [
      {
        question: "What is the main purpose of a Kubernetes Pod?",
        options: [
          "A) To manage storage resources",
          "B) To store application data",
          "C) To deploy and manage containers",
          "D) To provide network security for containers",
        ],
        answer: "C) To deploy and manage containers",
      },
      {
        question:
          "Which Kubernetes object is responsible for ensuring a specified number of pod replicas are running at any given time?",
        options: [
          "A) ReplicaSet",
          "B) Deployment",
          "C) Pod",
          "D) StatefulSet",
        ],
        answer: "A) ReplicaSet",
      },
      {
        question: "In Kubernetes, what is the role of a 'Service'?",
        options: [
          "A) To manage pod replicas",
          "B) To enable communication between pods",
          "C) To store container images",
          "D) To provide security for pods",
        ],
        answer: "B) To enable communication between pods",
      },
      {
        question:
          "Which Kubernetes object is used to run stateful applications that require persistent storage?",
        options: [
          "A) StatefulSet",
          "B) Deployment",
          "C) ReplicaSet",
          "D) DaemonSet",
        ],
        answer: "A) StatefulSet",
      },
      {
        question:
          "Which Kubernetes component manages the cluster's state and schedules work on nodes?",
        options: [
          "A) Kubelet",
          "B) Kube-API Server",
          "C) Controller Manager",
          "D) Kube-Scheduler",
        ],
        answer: "D) Kube-Scheduler",
      },
    ],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNextQues = () => {
    if (selectedOption === kubernetesQuiz.questions[count].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (count < kubernetesQuiz.questions.length - 1) {
      setCount((prevCount) => prevCount + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="absolute top-7 right-4 sm:right-10 z-50">
        <button
          onClick={handleSubmit}
          className="w-32 cursor-pointer title sm:w-36 h-10 sm:h-12 bg-[url('/assets/submit.png')] bg-cover bg-center rounded-lg text-amber-950 font-bold text-xl sm:text-xl transition-all hover:scale-105"
        >
          Submit
        </button>
      </div>

      <motion.div
        className="relative h-screen flex flex-col items-center justify-center w-full max-w-2xl sm:p-10 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/assets/board.png')" }}
        initial={{ y: 0 }}
        animate={{ 
          y: [-10, 0, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {!isSubmitted && <h1 className="text-white text-lg">Time left : {timeLeft}</h1>}

        {isSubmitted && (
          <>
            <h1 className="text-white font-bold text-center text-2xl">Quiz Ended!</h1>
            <h1 className="text-white font-bold text-center text-2xl">
              Score : {score}/{kubernetesQuiz.questions.length}
            </h1>
          </>
        )}

        {!isSubmitted && (
          <h1 className="text-white text-lg sm:text-xl md:text-xl mt-5 text-center">
            {kubernetesQuiz.questions[count].question}
          </h1>
        )}

        {!isSubmitted && (
          <div className="w-full flex flex-col items-center gap-2 sm:mt-10">
            {kubernetesQuiz.questions[count].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full sm:w-3/4 md:w-2/3 h-12 sm:h-14 md:h-16 bg-[url('/assets/buttons.png')] bg-cover bg-center rounded-lg text-white font-bold text-md sm:text-lg md:text-lg transition-all text-center flex items-center justify-center ${
                  selectedOption === option
                    ? "border-2 border-yellow-400 scale-105"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <img
          src="/assets/ship.png"
          className="h-24 sm:h-36 md:h-52 absolute mt-120 -left-10 sm:-left-20"
          alt="ship"
        />

        {!isSubmitted && (
          <button
            onClick={() => handleNextQues()}
            className={`w-32 absolute mt-[470px] ml-[450px] h-12 sm:h-14 md:h-20 bg-[url('/assets/nextbutton.png')] bg-cover bg-center hover:scale-105 cursor-pointer rounded-lg text-white font-bold text-md sm:text-lg md:text-lg transition-all text-center flex items-center justify-center ${
              count === kubernetesQuiz.questions.length - 1 || timeLeft === 0
                ? "hidden"
                : "block"
            }`}
          >
            Next
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default MainBoard;