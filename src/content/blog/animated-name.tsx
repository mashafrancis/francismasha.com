import { Link } from "next-view-transitions";

export function AnimatedName() {
  return (
    <Link href="/" className="mb-8 flex font-medium text-gray-400 fade-in">
      Francis Masha
    </Link>
  );
}
