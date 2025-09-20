"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WhatsAppChat (refined)
 * - Floating WhatsApp button
 * - After delay, show a single badge pulse (no auto-open)
 * - Clicking the button opens a small chat popup
 * - Quick replies or typed text jump the visitor to WhatsApp with prefilled text
 * - Cleans up unused code and fixes: hide badge & icon immediately on open
 */
export type WhatsAppChatProps = {
  /** Display name shown at the top of the chat popup */
  name: string;
  /** Profile image URL shown at left */
  profilePicture: string;
  /** Initial message to display inside the first bubble */
  message: string;
  /** Position of the widget in the viewport */
  position?: "bottom-right" | "bottom-left";
  /** Delay before badge appears (ms) */
  delayMs?: number;
  /** Phone number for WhatsApp (required). e.g. "+919876543210" */
  phone: string;
  /** Optional time label under the first bubble (e.g., "10:24 AM") */
  time?: string;
  /** Start closed and do not auto-show badge */
  disableAutoOpen?: boolean;
  /** Quick reply buttons for common messages */
  quickReplies?: string[];
};

interface ChatMessage {
  id: string;
  text: string;
  isFromVisitor: boolean;
  timestamp: Date;
}

export default function WhatsAppChat({
  name,
  profilePicture,
  message,
  position = "bottom-right",
  delayMs = 3000,
  phone,
  disableAutoOpen,
  time,
  quickReplies = [
    "Hi, I'm interested in your services",
    "Can you tell me about pricing?",
    "I need help with digital marketing",
    "Let's schedule a meeting",
  ],
}: WhatsAppChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [badgeShownOnce, setBadgeShownOnce] = useState(false);
  const [visitorMessage, setVisitorMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Initialize with welcome message (only once)
  useEffect(() => {
    setChatMessages([
      {
        id: "welcome",
        text: message,
        isFromVisitor: false,
        timestamp: new Date(),
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After delay, show a single badge pulse; do not auto-open
  useEffect(() => {
    if (disableAutoOpen || badgeShownOnce) return;
    const t = setTimeout(() => {
      setShowBadge(true);
      setBadgeShownOnce(true);
    }, Math.max(0, delayMs));
    return () => clearTimeout(t);
  }, [delayMs, disableAutoOpen, badgeShownOnce]);

  const normalizePhone = (p: string) => p.replace(/\D/g, "");

  const openWhatsApp = (messageToSend: string) => {
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${normalizePhone(
      phone
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    // Close popup after opening WhatsApp (and keep badge hidden)
    setIsOpen(false);
    setShowBadge(false);
  };

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: messageText,
      isFromVisitor: true,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
    setVisitorMessage("");
    openWhatsApp(messageText);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text: reply,
      isFromVisitor: true,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);
    openWhatsApp(reply);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const isRight = position === "bottom-right";

  return (
    <div
      className={[
        "fixed z-50",
        isRight ? "right-4 sm:right-6" : "left-4 sm:left-6",
        "bottom-4 sm:bottom-6",
      ].join(" ")}
      aria-live="polite"
    >
      {/* Floating WhatsApp button - hidden when chat is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="whatsapp-button"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className=" absolute bottom-0 right-0"
          >
            <motion.button
              type="button"
              aria-label="Open WhatsApp chat"
              onClick={() => {
                setIsOpen(true);
                setShowBadge(false); // ensure badge hides immediately on open
              }}
              whileTap={{ scale: 0.95 }}
              className="h-14 w-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 grid place-items-center text-white"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.button>

            {/* Badge animation - visible only while button is visible */}
            <AnimatePresence>
              {showBadge && (
                <motion.span
                  initial={{ scale: 0, opacity: 0, y: 6 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                  className={[
                    "absolute -top-1 -right-1",
                    !isRight && "-left-1 right-auto",
                    "inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white shadow",
                  ].join(" ")}
                  aria-label="New message"
                >
                  1
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={[
              "mt-3 w-[min(92vw,320px)] overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
            aria-label="WhatsApp message"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54] text-white">
              <img
                src={profilePicture}
                alt="Profile picture"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{name}</p>
                <p className="text-[11px] opacity-80">online</p>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowBadge(false); // keep badge hidden after close
                }}
                aria-label="Close chat"
                className="text-white/90 rounded-md p-1 transition-opacity hover:opacity-80"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="relative px-3 py-4 bg-[#ECE5DD] max-h-80 overflow-y-auto">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 ${
                    msg.isFromVisitor
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[86%] ${
                      msg.isFromVisitor ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`relative rounded-2xl px-3 py-2 shadow-sm ${
                        msg.isFromVisitor
                          ? "bg-[#DCF8C6] rounded-tr-md"
                          : "bg-white rounded-tl-md"
                      }`}
                    >
                      <p className="text-[13px] leading-snug text-slate-800">
                        {msg.text}
                      </p>
                      <div
                        className={`mt-1 flex items-center gap-1 text-[10px] text-slate-500 ${
                          msg.isFromVisitor ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span>{time || formatTime(msg.timestamp)}</span>
                      </div>
                      {/* Bubble tail */}
                      <span
                        className={`absolute h-3 w-3 rotate-45 ${
                          msg.isFromVisitor
                            ? "-right-1 bottom-0 bg-[#DCF8C6]"
                            : "-left-1 bottom-0 bg-white"
                        }`}
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Reply Buttons (only when only the welcome exists) */}
              {chatMessages.length <= 1 && (
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-slate-600 text-center">
                    Quick replies:
                  </p>
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-left p-2 text-xs bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Message Input */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={visitorMessage}
                  onChange={(e) => setVisitorMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage(visitorMessage);
                  }}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <motion.button
                  onClick={() => handleSendMessage(visitorMessage)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!visitorMessage.trim()}
                  className="px-3 py-2 bg-green-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SendIcon className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Icons (inline, no external deps) ---
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05.06C5.6.06.37 5.3.37 11.75c0 2.07.54 4.08 1.58 5.86L.04 24l6.57-1.86a11.71 11.71 0 0 0 5.44 1.39h.01c6.45 0 11.68-5.24 11.68-11.69 0-3.12-1.22-6.05-3.22-8.36ZM12.06 21.3h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.9 1.1 1.05-3.8-.23-.39a9.46 9.46 0 0 1-1.45-5.03c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.93.99 6.72 2.78a9.44 9.44 0 0 1 2.8 6.73c0 5.26-4.27 9.53-9.51 9.53Zm5.2-7.1c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.19.28-.72.89-.88 1.07-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.42.12-.56.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.52-.45-.45-.62-.46l-.53-.01c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.84 4.28.68.29 1.22.46 1.63.59.69.22 1.31.19 1.81.12.55-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.06-.12-.25-.19-.53-.33Z" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.41L13.41 12l4.9-4.89a1 1 0 0 0 0-1.4Z" />
    </svg>
  );
}

function SendIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

/**
 * Example usage:
 *
 * <WhatsAppChat
 *   name="SocialAdForge"
 *   profilePicture="/my_profile.jpg"
 *   message="Hi! Need help growing your brand? Choose a quick reply or type your message below to connect with us on WhatsApp!"
 *   phone="+919876543210"
 *   quickReplies={[
 *     "I need digital marketing services",
 *     "What are your packages?",
 *     "Can you help with social media?",
 *     "I want to schedule a consultation",
 *   ]}
 * />
 */
