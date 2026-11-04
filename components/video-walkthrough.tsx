"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./video-walkthrough.module.css";

const chapters = [
  { time: 0, label: "Make it yours", detail: "Your first hello", stamp: "0:00" },
  { time: 25, label: "Put a plan out there", detail: "An idea becomes an invitation", stamp: "0:25" },
  { time: 45, label: "Find your people", detail: "Watch the table fill up", stamp: "0:45" },
  { time: 60, label: "Actually show up", detail: "Less back-and-forth. More chai.", stamp: "1:00" },
  { time: 70, label: "Keep the moment", detail: "Something worth remembering", stamp: "1:10" },
];

function PlayIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 4.5v15l12-7.5z" /></svg>;
}

export function VideoWalkthrough() {
  const preview = useRef<HTMLVideoElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const startTime = useRef(0);
  const [opened, setOpened] = useState(false);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const [previewPaused, setPreviewPaused] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = preview.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean; effectiveType?: string };
    }).connection;
    let visible = false;
    let cancelled = false;
    const update = () => {
      const savingData = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
      if (!visible || document.hidden || opened || previewPaused || motion.matches || savingData) {
        video.pause();
        return;
      }
      // Attach only when visible and permitted; the full film loads on demand.
      if (!video.getAttribute("src")) video.src = "/video/plans-preview.mp4";
      void video.play().then(() => { if (cancelled) video.pause(); }).catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.3 });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      cancelled = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      video.pause();
    };
  }, [opened, previewPaused]);

  useEffect(() => {
    if (!opened) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [opened]);

  function watch(time = 0) {
    const video = player.current;
    if (!video || !dialog.current) return;
    if (!dialog.current.open) {
      trigger.current = document.activeElement as HTMLElement;
      dialog.current.showModal();
    }
    setOpened(true);
    setError(false);
    preview.current?.pause();
    startTime.current = time;
    if (!video.getAttribute("src")) video.src = "/video/plans-walkthrough.mp4";
    if (video.readyState >= 1) video.currentTime = time;
    video.muted = false;
    // Called from a user gesture. Native controls remain available if play is blocked.
    void video.play().catch(() => {});
  }

  function close() {
    player.current?.pause();
    dialog.current?.close();
    setOpened(false);
    trigger.current?.focus();
  }

  return (
    <section id="watch" aria-labelledby="walkthrough-title" className={styles.room}>
      <div className={styles.topline}><span>SEE PLANS IN ACTION</span><span>1 MIN 43 SEC</span></div>
      <div className={styles.layout}>
        <div className={styles.story}>
          <h2 id="walkthrough-title">See how<br /><em>it works.</em></h2>
          <p>Watch a plan go from an idea to a real meet-up.</p>
          <button type="button" className={styles.watchButton} onClick={() => watch()}><PlayIcon /><span>Play video <small>1 min 43 sec · Sound on</small></span><span aria-hidden="true">↗</span></button>
          <details>
          <summary className={styles.chapterHeading}>Choose a chapter <span aria-hidden="true">+</span></summary>
          <ol className={styles.chapters}>
            {chapters.map((chapter, index) => (
              <li key={chapter.time}><button type="button" onClick={() => watch(chapter.time)} aria-label={`Watch ${chapter.label} from ${chapter.stamp}`}>
                <span className={styles.number}>0{index + 1}</span><span>{chapter.label}<small>{chapter.detail}</small></span><span className={styles.stamp}>{chapter.stamp} <span aria-hidden="true">↗</span></span>
              </button></li>
            ))}
          </ol>
          </details>
        </div>
        <div className={styles.stage}>
          <div className={styles.film}>
            <div className={styles.filmHeader}><span className={styles.dot} /> PLANS, START TO FINISH <span>9:16</span></div>
            <button type="button" className={styles.posterButton} onClick={() => watch()} aria-label="Watch the full Plans walkthrough with sound">
              <video ref={preview} muted playsInline loop preload="none" poster="/video/plans-poster.jpg" width="540" height="960" aria-hidden="true" onPlay={() => setPreviewPlaying(true)} onPause={() => setPreviewPlaying(false)} />
              <span className={styles.playBadge}><PlayIcon /> Play video</span>
            </button>
            <div className={styles.filmFooter}><span>{previewPlaying ? "SILENT SNEAK PEEK" : "YOUR NEXT GOOD PLAN"}</span><button type="button" onClick={() => setPreviewPaused(!previewPaused)} aria-label={previewPaused ? "Allow preview autoplay" : "Pause preview"}>{previewPaused ? "Resume preview" : "Pause preview"}</button></div>
          </div>
        </div>
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby="film-title" onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
        <div className={styles.cinema}>
          <header className={styles.cinemaHeader}><div><span>PLANS WALKTHROUGH</span><h3 id="film-title">See how Plans works.</h3></div><button type="button" onClick={close} aria-label="Close walkthrough" autoFocus>✕</button></header>
          <div className={styles.cinemaBody}>
            <video ref={player} controls playsInline preload="none" poster="/video/plans-poster.jpg" aria-label="Plans full walkthrough with narration" onLoadedMetadata={() => { if (player.current) player.current.currentTime = startTime.current; }} onTimeUpdate={() => { const time = player.current?.currentTime ?? 0; setActiveChapter(chapters.reduce((active, chapter, index) => time >= chapter.time ? index : active, 0)); }} onError={() => setError(true)} />
            <aside className={styles.cinemaChapters}><p>ONE IDEA. FIVE LITTLE STEPS.</p>{chapters.map((chapter, index) => <button key={chapter.time} type="button" aria-current={activeChapter === index ? "step" : undefined} onClick={() => watch(chapter.time)}><span>0{index + 1}</span><span>{chapter.label}<small>{chapter.stamp}</small></span></button>)}<a href="#download" onClick={close}>Make your own plan ↗</a></aside>
          </div>
          {error && <p role="alert" className={styles.error}>The film couldn’t load. <a href="/video/plans-walkthrough.mp4">Open the video directly</a> or close and try again.</p>}
        </div>
      </dialog>
    </section>
  );
}
