import { Button } from "../components/ui/button";
import Link from "next/link";
import Logo from "./_components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center p-4 justify-between">
        <Logo />
        <Link href="/dashboard">
          <Button size="sm">Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
