
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventNow, setIsEventNow] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-05-23T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsEventNow(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  if (isEventNow) {
    return (
      <div className="w-full max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-primary mb-6">Hackathon 2025</h2>
        <div className="text-2xl font-bold text-green-500 mb-4">Happening Now!</div>
        <p className="text-gray-600">Join us for an amazing event of innovation and creativity.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="text-sm text-gray-500 mb-2">May 2025</div>
      <h2 className="text-4xl font-bold text-primary mb-6">Hackathon 2025</h2>
      <div className="text-xl font-semibold text-primary/80 mb-8">ANNUAL FLAGSHIP EVENT</div>
      
      <div className="flex justify-center gap-8 mb-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">{timeLeft.days}</div>
          <div className="text-sm text-gray-500">Days</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">{timeLeft.hours}</div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-500 mb-2">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-500 mb-2">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>

      <p className="text-gray-600 mb-8 text-center">
        Showcasing the best of innovation and technology.
      </p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Explore Events
        </button>
        <button
          className="bg-white text-blue-500 border border-blue-500 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
