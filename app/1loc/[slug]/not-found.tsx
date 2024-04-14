import { Boundary } from "@/components/Boundary";

export default function NotFound() {
  return (
    <Boundary labels={["Script Not Found"]} color="blue">
      <div className="space-y-4">
        <div className="text-vercel-blue">
          <p className="font-medium">Could not find the script requested</p>
        </div>
      </div>
    </Boundary>
  );
}
