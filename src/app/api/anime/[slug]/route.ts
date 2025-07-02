import { NextResponse, NextRequest } from "next/server";
import anime from "@/utils/anime";

export async function GET(request: NextRequest, props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  try {
    const data = await anime(slug);

    if (!data) {
      return NextResponse.json({ error: "Anime tidak ditemukan atau parsing gagal" }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
