import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const collection = searchParams.get("collection");
  const uid = searchParams.get("uid");

  const url = uid
    ? `${process.env.GOOGLE_SHEETS_ENDPOINT}?&collection=${collection}&where=uid=${uid}`
    : `${process.env.GOOGLE_SHEETS_ENDPOINT}?&collection=${collection}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data);
}
