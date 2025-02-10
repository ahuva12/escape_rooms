import { NextResponse } from "next/server";
import { HDate, Sedra } from "@hebcal/core";

export async function GET(req: Request) {

  try {
    const today = new HDate(); 
    // const today = new HDate(23, "Av", 5785); 
    const sedra = new Sedra(today.getFullYear(), true); 
    const parasha = sedra.lookup(today);

    if (parasha && parasha.parsha) {
      return NextResponse.json({ parasha: parasha.parsha.join(" - ") });
    } else {
      return NextResponse.json(
        { error: "The parasha not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching parasha:", error);
    return NextResponse.json(
      { error: "Failed to fetch the parasha" },
      { status: 500 }
    );
  }
}
