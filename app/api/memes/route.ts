import { NextResponse } from 'next/server';
import { mockMemes } from '@/data/memes';

export async function GET() {
  try {
    const response = {
      success: true,
      data: mockMemes,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching memes:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch memes' },
      { status: 500 },
    );
  }
}
