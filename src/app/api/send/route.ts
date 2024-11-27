import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { EmailTemplate } from '../../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  date: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, guests, message } =
      formSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'Melange Traiteur <onboarding@resend.dev>',
      to: ['jnmichielsens@emisys.com'],
      subject: 'Offerte aanvraag - MÉLANGE TRAITEUR',
      react: EmailTemplate({ name, email, phone, date, guests, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
