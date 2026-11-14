import { NextRequest, NextResponse } from "next/server";
import { site } from "@/components/site";

export function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  // Android users go to Google Play to download the native app
  if (/Android/i.test(userAgent)) {
    return NextResponse.redirect(site.playStoreUrl, { status: 307 });
  }

  // iOS users go to Apple App Store
  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return NextResponse.redirect(site.appStoreUrl, { status: 307 });
  }

  // Web users are redirected to joinplansnow.web.app to download/install/launch Plans
  return NextResponse.redirect(site.webAppUrl, { status: 307 });
}
