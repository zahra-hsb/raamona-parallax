'use server'
import { headers } from "next/headers";

export async function deviceDetector() {
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    return /iPhone|iPad|iPod|Android/i.test(userAgent);
}