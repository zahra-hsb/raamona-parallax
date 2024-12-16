import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data) {
      return NextResponse({ message: 'the data does not exists for reset password!' }, { status: 400 })
    }
    console.log(JSON.stringify(data))
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/Users/password-reset/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      let error = "failed to register user";
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        try {
          const errorData = await res.json();
          error = errorData.message || errorData.error || error;
          console.error("Server Error Response:", errorData);
        } catch (jsonError) {
          console.error("Error parsing JSON error response:", jsonError);
          error = `Failed to parse error response: ${jsonError.message}`;
        }
      } else {
        error = await res.text();
        console.error("Non-JSON error response:", error);
      }
      return NextResponse.json({ error }, { status: res.status });
    }

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