"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { loginAction, type LoginState } from "../actions";
import { ADMIN_IDENTITY } from "@/lib/admin/identity";

const initialState: LoginState = { error: "" };

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const [password, setPassword] = useState("");
  const [timeString, setTimeString] = useState("");
  const [batteryLevel, setBatteryLevel] = useState<number | null>(100);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const lastErrorRef = useRef<string>("");

  // Jam lokal real-time (update per menit, aman SSR hydration)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  // Deteksi persentase baterai asli jika didukung browser
  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const nav = navigator as unknown as {
      getBattery?: () => Promise<{
        level: number;
        addEventListener: (event: string, handler: () => void) => void;
        removeEventListener: (event: string, handler: () => void) => void;
      }>;
    };
    if (typeof nav.getBattery === "function") {
      let batteryRef: Awaited<ReturnType<NonNullable<typeof nav.getBattery>>> | null = null;
      nav.getBattery().then((battery) => {
        batteryRef = battery;
        setBatteryLevel(battery.level * 100);
        battery.addEventListener("levelchange", () => {
          setBatteryLevel(battery.level * 100);
        });
      }).catch(() => {
        setBatteryLevel(100);
      });
      return () => {
        if (batteryRef) {
          batteryRef.removeEventListener("levelchange", () => {});
        }
      };
    }
  }, []);

  // Animasi guncang (macOS shake) saat password salah atau rate limited
  useEffect(() => {
    if (state.error && state.error !== lastErrorRef.current) {
      lastErrorRef.current = state.error;
      setShakeKey((prev) => prev + 1);
      setPassword("");
      inputRef.current?.focus();
    }
  }, [state.error]);

  // Bangunkan dari Sleep saat menekan sembarang tombol atau klik mouse
  useEffect(() => {
    if (!isSleeping) return;
    const handleWake = () => setIsSleeping(false);
    window.addEventListener("keydown", handleWake);
    window.addEventListener("mousedown", handleWake);
    window.addEventListener("touchstart", handleWake);
    return () => {
      window.removeEventListener("keydown", handleWake);
      window.removeEventListener("mousedown", handleWake);
      window.removeEventListener("touchstart", handleWake);
    };
  }, [isSleeping]);

  const handleSleep = () => setIsSleeping(true);

  const handleRestart = () => {
    setIsRestarting(true);
    setTimeout(() => {
      window.location.reload();
    }, 450);
  };

  const handleShutDown = () => {
    setIsShuttingDown(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  const hasInput = password.length > 0;
  const isCurtainActive = isSleeping || isRestarting || isShuttingDown;

  return (
    <section className="macos-lockscreen" aria-label="macOS Admin Lock Screen">
      {/* Background Wallpaper Big Sur 6K */}
      <Image
        src="/images/admin/big-sur-day.webp"
        alt="macOS Big Sur Wallpaper"
        fill
        priority
        className="macos-lockscreen-bg"
        sizes="100vw"
        quality={85}
      />
      <div className="macos-lockscreen-vignette" aria-hidden="true" />

      {/* Top Status Bar macOS */}
      <header className="macos-topbar">
        <div className="macos-topbar-item" title={`Baterai ${batteryLevel ?? 100}%`}>
          <span className="tabular-nums">
            {batteryLevel !== null ? `${Math.round(batteryLevel)}%` : "100%"}
          </span>
          <svg
            width="22"
            height="11"
            viewBox="0 0 22 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            aria-hidden="true"
          >
            <rect x="0.55" y="0.55" width="18" height="9.9" rx="2.5" />
            <path d="M19.8 3.5v4" strokeWidth="1.2" strokeLinecap="round" />
            <rect
              x="2"
              y="2"
              width={Math.max(2, (15 * (batteryLevel ?? 100)) / 100)}
              height="7"
              rx="1.5"
              fill="currentColor"
              stroke="none"
            />
          </svg>
        </div>

        <div className="macos-topbar-item" title="Wi-Fi Terhubung">
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M1.5 3.2C5.2-.5 9.8-.5 13.5 3.2M3.8 5.8c2.4-2.2 5-2.2 7.4 0M6 8.5a2.2 2.2 0 0 1 3 0" />
            <circle cx="7.5" cy="10" r="0.75" fill="currentColor" stroke="none" />
          </svg>
        </div>

        {timeString && (
          <div className="macos-topbar-item">
            <span>{timeString}</span>
          </div>
        )}
      </header>

      {/* Center Login Pod */}
      <main className="macos-login-pod">
        {/* Logo Avatar Brand dengan Biometric Pulse saat Pending */}
        <div className="macos-avatar-wrap">
          {pending && <div className="macos-avatar-pulse" aria-hidden="true" />}
          <div className="macos-avatar-disc">
            <Image
              src="/images/admin/admin-avatar.png"
              alt={ADMIN_IDENTITY.adminName}
              width={96}
              height={96}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Nama Akun */}
        <h1 className="macos-username">{ADMIN_IDENTITY.adminName}</h1>

        {/* Form Password / Real Network-Driven Loading Progress Bar */}
        {pending ? (
          <div
            className="macos-progress-wrap"
            role="status"
            aria-live="polite"
            aria-label="Memverifikasi kredensial..."
          >
            <div className="macos-progress-bar" />
          </div>
        ) : (
          <form
            key={shakeKey}
            action={formAction}
            className={`macos-input-capsule ${shakeKey > 0 ? "macos-shake" : ""}`}
          >
            <input
              ref={inputRef}
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              autoComplete="current-password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="macos-password-input"
              aria-label="Password Administrator"
            />

            {hasInput ? (
              <button
                type="submit"
                aria-label="Masuk"
                className="macos-pill-btn arrow"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 6h7M6.5 2.5 10 6l-3.5 3.5" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                aria-label="Petunjuk Password"
                title="Petunjuk: Masukkan password administrator sistem"
                onClick={() => setShowHint((prev) => !prev)}
                className="macos-pill-btn help"
              >
                ?
              </button>
            )}
          </form>
        )}

        {/* Subtitle / Face ID Hint / Status Error */}
        <p
          className={`macos-hint ${state.error && !pending ? "is-error" : ""}`}
          role={state.error && !pending ? "alert" : "status"}
          style={{ opacity: pending ? 0 : 1 }}
        >
          {state.error
            ? state.error
            : showHint
            ? "Masukkan password master administrator untuk membuka."
            : "Your password is required to enable Face ID"}
        </p>
      </main>

      {/* Bottom Action Controls (Sleep, Restart, Shut Down) */}
      <footer
        className="macos-bottombar"
        style={{
          opacity: pending ? 0 : 1,
          pointerEvents: pending ? "none" : "auto",
        }}
      >
        <button
          type="button"
          onClick={handleSleep}
          className="macos-action-btn"
          aria-label="Tidurkan Layar (Sleep)"
        >
          <div className="macos-action-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="7.5" />
              <path d="M4 11h10" />
            </svg>
          </div>
          <span className="macos-action-label">Sleep</span>
        </button>

        <button
          type="button"
          onClick={handleRestart}
          className="macos-action-btn"
          aria-label="Muat Ulang Layar (Restart)"
        >
          <div className="macos-action-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="7.5" />
              <path d="m10.5 6.5-3 2.5 3 2.5V6.5z" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <span className="macos-action-label">Restart</span>
        </button>

        <button
          type="button"
          onClick={handleShutDown}
          className="macos-action-btn"
          aria-label="Keluar ke Beranda Publik (Shut Down)"
        >
          <div className="macos-action-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="7.5" />
              <path d="M9 4.5v5" />
            </svg>
          </div>
          <span className="macos-action-label">Shut Down</span>
        </button>
      </footer>

      {/* Black Curtain Overlay untuk Sleep, Restart, Shut Down */}
      <div
        className={`macos-black-curtain ${isCurtainActive ? "is-active" : ""}`}
        aria-hidden="true"
        onClick={() => isSleeping && setIsSleeping(false)}
      />
    </section>
  );
}
