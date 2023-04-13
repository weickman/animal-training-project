import { NextResponse } from "next/server"

export default function checkMethod(allowedMethods, method) {
    if (!(method in allowedMethods)) {
        return new NextResponse(
            JSON.stringify({ success: false, error: "The request method is not in allowedMethods" + method}),
            { status: 400 }
        )
    }
    return NextResponse.next()
}