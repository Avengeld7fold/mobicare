import Link from "next/link";

type MobiCarePlaceholderProps = {
  title: string;
  description: string;
  action: string;
};

export default function MobiCarePlaceholder({ title, description, action }: MobiCarePlaceholderProps) {
  return (
    <section className="mobi-placeholder">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="mobi-button mobi-button--primary" href="/pricelist">
          {action} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
