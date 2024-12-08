import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const res = await fetch(`http://127.0.0.1:8000/api/Users/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // if (!res.ok) {  
    //   let error = "failed to register user";  
    //   const contentType = res.headers.get("content-type");  
    //   if (contentType && contentType.indexOf("application/json") !== -1) {  
    //     try {  
    //       const errorData = await res.json();  
    //       error = errorData.message || errorData.error || error;  
    //       console.error("Server Error Response:", errorData);
    //     } catch (jsonError) {  
    //       console.error("Error parsing JSON error response:", jsonError);  
    //       error = `Failed to parse error response: ${jsonError.message}`;  
    //     }  
    //   } else {  
    //     error = await res.text();  
    //     console.error("Non-JSON error response:", error);  
    //   }  
    //   return NextResponse.json({ error }, { status: res.status });  
    // }  

    const registrationData = await res.json();
    console.log(registrationData)
    if (registrationData.username[0] === 'A user with that username already exists.') {
      return NextResponse.json({ error: registrationData.username, isExistUser: true, data: registrationData });
    }

    return NextResponse.json({ message: 'User registered successfully!', data: registrationData }, { status: 201 });

  } catch (error) {
    console.error("Error during registration:", error);
    if (error.message.includes('Network')) {
      return NextResponse.json({ error: "Network error. Please check your connection." }, { status: 503 }); // Handle network errors  
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}