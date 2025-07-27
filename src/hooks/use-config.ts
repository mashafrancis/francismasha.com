import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "pnpm" | "yarn" | "npm" | "bun";
export type InstallationType = "cli" | "manual";

type Config = {
  packageManager: PackageManager;
  installationType: InstallationType;
};

const configAtom = atomWithStorage<Config>("chanhdai.config", {
  packageManager: "pnpm",
  installationType: "cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
