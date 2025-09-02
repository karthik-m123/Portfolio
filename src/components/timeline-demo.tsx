import React from "react";
import { Timeline } from "./ui/timeline";
import campusPulse from "../assets/campus-pulse.png";
import campusTrade from "../assets/campus-trade.png";
import careerAi from "../assets/career-ai.png";
import edusphereDashboard from "../assets/edusphere-dashboard.png";
import edusphereLogin from "../assets/edusphere-login.png";
import edusphereMap from "../assets/edusphere-map.png";

export default function TimelineDemo() {
  const data = [
    {
      title: "1️⃣",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-2">EduSphere – AI Powered Learning Platform</h3>
          <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
            Reimagined student life with a unified AI-powered platform, developed using Stanford d.school Design Thinking and insights from 200+ students. Delivered intelligent automation, personalized learning, and real-time support.
          </p>
          <h4 className="font-semibold mb-2">Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li><span className="font-bold">🤖 Smart AI Tools:</span> Tutor, Summarizer, Paraphraser, Grammar Checker</li>
            <li><span className="font-bold">🗓️ Productivity Suite:</span> Smart timetable, attendance tracker, dashboard</li>
            <li><span className="font-bold">🎯 CareerAI:</span> Career roadmap, resume builder, job feed, interview simulator</li>
            <li><span className="font-bold">📢 CampusPulse:</span> Real-time feedback with sentiment analysis</li>
            <li><span className="font-bold">💬 CampusTrade:</span> Student marketplace for books & services</li>
            <li><span className="font-bold">🌐 Built with:</span> ReactJS, Node.js, Firebase, OpenAI APIs</li>
            <li><span className="font-bold">📊 Achieved:</span> 94% task success rate & NPS of 74 in prototype testing</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <img src={edusphereDashboard} alt="EduSphere Dashboard" className="rounded-lg shadow-lg" />
            <img src={edusphereLogin} alt="EduSphere Login" className="rounded-lg shadow-lg" />
            <img src={edusphereMap} alt="EduSphere Map" className="rounded-lg shadow-lg" />
            <img src={careerAi} alt="Career AI" className="rounded-lg shadow-lg" />
            <img src={campusPulse} alt="Campus Pulse" className="rounded-lg shadow-lg" />
            <img src={campusTrade} alt="Campus Trade" className="rounded-lg shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "2️⃣",
      content: (
        <div>
          <h3 className="text-2xl font-bold mb-2">Hand Sense – IoT-Powered Health Monitoring Wearable</h3>
          <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
            Designed and built a smart healthcare IoT wearable that continuously tracks vital signs in real time, enabling proactive health monitoring for patients, seniors, and fitness enthusiasts.
          </p>
          <h4 className="font-semibold mb-2">Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li><span className="font-bold">❤️ Vital Tracking:</span> Heart rate (BPM), body temperature, SpO₂ monitoring</li>
            <li><span className="font-bold">📡 Always Connected:</span> Real-time data streaming via Wi-Fi & Bluetooth</li>
            <li><span className="font-bold">📊 Health Dashboard:</span> Cloud visualization using Personal and customized dashboard and by app </li>
            <li><span className="font-bold">⚠️ Smart Alerts:</span> Instant notifications for abnormal readings via IFTTT</li>
            <li><span className="font-bold">🔋 Wearable Design:</span> Lightweight, battery-powered wrist/glove integration</li>
            <li><span className="font-bold">🛠 Built with:</span> ESP32, MAX30102 sensor, MLX90614 temperature sensor, OLED display</li>
            <li><span className="font-bold">🚀 Impact:</span> Enables 24/7 remote health monitoring and early anomaly detection</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3️⃣",
      content: (
        <div>
          <p className="text-neutral-700 dark:text-neutral-300">Updating soon</p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}