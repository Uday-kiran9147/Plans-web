import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { site } from "@/components/site";
import { WallClientView } from "./wall-client-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Founding Wall - Plans",
  description:
    "Join the first 100 founding members to stamp your mark on the Plans signboard.",
};

export default async function WallPage() {
  const reqHeaders = await headers();
  const ua = reqHeaders.get("user-agent") || "";

  if (/iPad|iPhone|iPod/i.test(ua)) {
    redirect(site.wallIosUrl);
  }

  return <WallClientView />;
}
