"use client";

import ServiceRequestForm from "./ServiceRequestForm";
import { useI18n } from "@/lib/i18n/context";
import "./contact.css";

export default function ContactPageContent() {
  const { dict } = useI18n();

  return (
    <div className="mobi-contact-wrapper">
        <header className="mobi-contact-header mobi-container">
          <h1 className="mobi-contact-title">
            {dict.contact.requestHeading1}{" "}
            <span className="highlight">{dict.contact.requestHeading2}</span>
          </h1>

          <p className="mobi-contact-desc">
            {dict.contact.requestDescription}
          </p>
        </header>

        <div className="mobi-contact-surface">
          <div className="mobi-container"><ServiceRequestForm /></div>
        </div>
    </div>
  );
}
