import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor() {}

  async send(email: string, name: string, date: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Upcoming Appointment - Orallink`,
      text: `Your next appointment is scheduled.`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 30px; border: 1px solid #ddd; border-radius: 12px; max-width: 450px; margin: auto; background-color: #F9FAFB;">
          
          <!-- Logo -->
          <img src="https://ucarecdn.com/e6e4934e-02d3-47cc-bfea-95dfb686d474/-/preview/805x1000/" 
               alt="Orallink Logo" 
               style="max-width: 120px; margin-bottom: 20px;" />
          
          <!-- Header -->
          <h2 style="color: #10B981; margin-bottom: 10px;">Hey ${name}! 🦷</h2>
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Your next dental appointment is scheduled for:</p>
          
          <!-- Appointment Date -->
          <div style="
            font-size: 22px;
            font-weight: bold;
            color: #10B981;
            background-color: #ECFDF5;
            padding: 12px 20px;
            border-radius: 8px;
            display: inline-block;
            margin-bottom: 20px;
            ">
            ${date}
          </div>
    
          <p style="font-size: 12px; color: #999; margin-top: 30px;">© 2025 Orallink. All rights reserved.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
}
