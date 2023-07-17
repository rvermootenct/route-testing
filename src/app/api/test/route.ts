
import { NextResponse } from 'next/server'

// eslint-disable-next-line import/prefer-default-export
export const POST = async (req: Request) => {
  return NextResponse.json({ foo: 'bar' })
}

export const GET = async (req: Request) => {
  return NextResponse.json({ foo: 'bar' })
}
