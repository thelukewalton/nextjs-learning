import MyLink from "./link";

export default function Header() {
  return (
    <header className="grid grid-cols-3 gap-4">
      <MyLink link="work" />
      <MyLink link="speaking" />
      <MyLink link="photography" />
    </header>
  );
}
