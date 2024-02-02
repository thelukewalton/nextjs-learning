import MyLink from "./link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 gap-40">
      <MyLink
        link="https://linkedin.com/in/luke-walton"
        text="LinkedIn"
        external
      />
      <MyLink link="https://github.com/thelukewalton" text="GitHub" external />
    </footer>
  );
}
