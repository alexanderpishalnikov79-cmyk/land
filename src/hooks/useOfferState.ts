import { useEffect, useMemo, useState } from "react";

const OFFER_DURATION = 10 * 60;

export function useOfferState() {
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION);
  const [packsLeft, setPacksLeft] = useState(30);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (packsLeft <= 1) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPacksLeft((current) => Math.max(1, current - 1));
    }, Math.ceil(Math.random() * 50 + 1) * 1000);

    return () => window.clearTimeout(timeout);
  }, [packsLeft]);

  const time = useMemo(() => {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");
    return { minutes, seconds };
  }, [secondsLeft]);

  return { time, packsLeft };
}
