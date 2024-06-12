// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import quizData from './quizData'; // Adjust the path based on your file structure
import Colors from '../../../Utils/Colors';



function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Front() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90); // 2 minutes in seconds
  const [streak, setStreak] = useState(0);


  useEffect(() => {
    setShuffledQuestions(shuffleArray(quizData));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let timer;
  
    if (timeLeft > 0 && lives > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      setShowScore(true);
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, lives, showScore]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = shuffledQuestions[currentQuestion]?.correctAnswer;

    if (correctAnswer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      setLives((prevLives) => prevLives - 1);
      setStreak(0); // Reset streak if the answer is incorrect
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < shuffledQuestions.length && lives > 0) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setShuffledQuestions(shuffleArray(quizData));
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setStreak(0); // Reset streak
    setShowScore(false);
    setTimeLeft(120); // Reset the timer to 2 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={{margin:20,alignItems: 'center'}}>
      <Text style={styles.text}>Trivia Time</Text>
    </View>
      <View style={styles.top}>
        <Text style={styles.streakText}>🔥 Streak: {streak}</Text>
        <View style={styles.topRight}>
          <Text style={styles.livesText}>❤️ {lives}</Text>
          {!showScore && <Text style={styles.timerText}>⏰ {formatTime(timeLeft)}</Text>}
        </View>
      </View>
      {showScore ? (
        <View style={styles.resultContainer}>
          <Text style={styles.scoreText}>Your Score: {score}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{shuffledQuestions[currentQuestion]?.question}</Text>
          {shuffledQuestions[currentQuestion]?.choices.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(index)}
              style={styles.optionContainer}
            >
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.BLACK,  Changed background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
    fontWeight:'700'
},
  questionContainer: {
    // backgroundColor: '#81C784',  Changed question container background color
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle: {
    color: '#388E3C', // Changed option text color
    padding: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
  optionContainer: {
    borderColor: '#388E3C', // Changed option border color
    borderWidth: 2,
    marginTop: 15,
  },
  questionText: {
    fontSize: 24,
    color: '#004D40', // Changed question text color
  },
  top: {
    flexDirection: 'row',
    marginBottom: 20, // Adjusted margin
  },
  topRight: {
    flexDirection: 'row',
    marginLeft: 'auto', // Moved to the right
  },
  livesText: {
    fontSize: 20,
    marginRight: 10,
    color: '#D32F2F', // Changed lives text color
  },
  timerText: {
    fontSize: 20,
    color: '#1976D2', // Changed timer text color
  },
  streakText: {
    fontSize: 20,
    marginRight: 10,
    color: '#FFD700', // Changed streak text color
  },
  resultContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#D32F2F', // Changed score text color
  },
  restartButton: {
    backgroundColor: '#1976D2', // Changed restart button background color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
