import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json([{
    message: "Otakudesu api by hirako",
    GitHub: "https://github.com/hirakoxs",
    Support: "hirakoxs.t.me",
  },],
    { status: 200 }
  )
}
