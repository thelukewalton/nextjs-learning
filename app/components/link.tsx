import Link from "next/link";

export default function MyLink({
  link,
  text,
  external = false,
}: {
  link: string;
  text?: string;
  external?: boolean;
}) {
  return (
    <Link
      className="hover:scale-105 transition-all"
      href={`${external ? "" : "./"}${link}`}
      as={`${external ? "" : "./"}${link}`}
    >
      {text ?? capitalise(link)}
    </Link>
  );
}

const capitalise = (str: String) => {
  const x = str.split("");
  return x.shift()?.toUpperCase() + x.join("");
};
