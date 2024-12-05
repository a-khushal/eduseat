// import twilio from 'twilio';

// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// export const sendOtp = async (phone: string, otp: string) => {
//   try {
//     await client.messages.create({
//       body: `Your OTP is ${otp}`,
//       from: process.env.TWILIO_PHONE_NUMBER,  // Your Twilio phone number
//       to: phone,
//     });
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//   }
// };

// export const generateOtp = () => {
//   return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
// };

// export const verifyOtp = async (phone: string, otp: string) => {
//   // You can store OTP in the database or a cache (Redis) temporarily
//   // For this example, assume we already have the OTP stored in memory or a DB
//   const storedOtp = await getOtpFromDbOrCache(phone);
//   return storedOtp === otp;
// };
