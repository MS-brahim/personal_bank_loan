import nodemailer from "nodemailer";

async function sendMail(to, data) {
  output = `<h2>Congratulation  </h2>
     
     <div>congratulation  your account is created successfully
    
     <div>
     <h2>Name :${data.name}</h2>
     <h2>Email :${data.email}</h2>
     <h2>Phone : ${data.phone}</h2>
     <h2>Amount :${data.amount}</h2>
     <h2>Credit Duration :${data.months}</h2>
     <h2>Amount :${data.amortissement}</h2>
     </div>
     </div>
     `;

  //   const sendTo = validate.email
  const sendTo = to;
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "projectmailtestyc@gmail.com",
        pass: "youcode2020",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Bank Loan <noreplay@loan.com>",
      to: sendTo,
      subject: "Verified ✔",
      text: "Created account ",
      html: output,
    });
  } catch (error) {
    console.log(error);
  }
}

export { randomPassword, sendMail };
