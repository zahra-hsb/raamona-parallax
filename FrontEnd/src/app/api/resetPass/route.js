import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Users/password-reset/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });


    const registrationData = await res.json();
    console.log(registrationData)
    
    return NextResponse.json({ message: 'User registered successfully!', data: registrationData }, { status: 201 });

  } catch (error) {
    console.error("Error during registration:", error);
    if (error.message.includes('Network')) {
      return NextResponse.json({ error: "Network error. Please check your connection." }, { status: 503 }); 
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}