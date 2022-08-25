import { SparklesIcon } from "@heroicons/react/outline";

export default function IndexPage() {
  return (
    <div className="space-y-8 px-6 py-4">
      <div className="flex gap-4 p-6">
        <p>Hello, world!</p>
        <SparklesIcon className="h-6 w-6 stroke-gradient gradient-dusk" />
      </div>

      <div className="light flex w-64 gap-4 rounded-xl bg-layer-1 p-6">
        <p className="text-text">Hello, world!</p>
        <SparklesIcon className="h-6 w-6 stroke-gradient gradient-dusk" />
      </div>
    </div>
  );
}
