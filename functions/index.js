const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const nodemailer = require('nodemailer');

// Configure nodemailer with your email service
const createTransporter = () => nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendInquiryNotification = onDocumentCreated('inquiries/{inquiryId}', async (event) => {
  const inquiry = event.data.data();

  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // your admin email
    subject: 'New Tutoring Inquiry - Maruti Tutors',
    html: `
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Subject:</strong> ${inquiry.subject || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message}</p>
      <p><strong>Received:</strong> ${inquiry.createdAt.toDate().toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Inquiry notification sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
});