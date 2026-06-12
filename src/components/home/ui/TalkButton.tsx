import Link from "next/link";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href="#contact"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;