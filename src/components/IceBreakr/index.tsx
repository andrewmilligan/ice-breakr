import { useMemo, useState, useCallback } from "react";
import classNames from "classnames";
import questions from "@/content/questions.json";
import styles from "./styles.module.scss";

export default function IceBreakr() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [question, setQuestion] = useState<string>();

  const randomize = useCallback(async () => {
    setIsBlurred(true);
    const timer = setTimeout(() => {
      const dart = Math.floor(Math.random() * questions.length);
      setQuestion(questions[dart]);
      setIsBlurred(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const widonted = useMemo(() => {
    if (!question) return undefined;
    const words = question.split(' ');
    return (
      <>
        {words.slice(0, words.length - 1).join(' ')}
        &nbsp;
        {words[words.length - 1]}
      </>
    );
  }, [question]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span className={styles.logo} />
        Ice <span className={styles.pinkSpan}>Breakr</span>
      </h1>

      <button
        className={styles.button}
        onClick={randomize}
        aria-label="Randomize"
      >
        <div className={styles.card}>
          <div
            className={classNames(
              styles.cardContent,
              {
                [`${styles.isEmpty}`]: !question,
                [`${styles.isBlurred}`]: isBlurred,
              },
            )}
          >
            {question && (
              <div className={styles.question}>
                {widonted}
              </div>
            )}
          </div>
        </div>
      </button>

      <button
        className={styles.mobileButton}
        onClick={randomize}
        aria-label="Randomize"
      />
    </main>
  );
}
