const sendEmail = require('../email')

const postEmail = async (req,res,next) => {
  const emailAddress = req.body.emailAddress;
  console.log(emailAddress)
  if(emailAddress === undefined){
      res.status(404).json;
  }
  else{
    console.log(`sending email to ${emailAddress}`)
    const message = `Enjoy your free sequence`
    const subject = 'xlights'
    await sendEmail({
      email:emailAddress,
    });

    res.status(200).json({
      status: 'success',
      message: 'email sent'
    });
  }
}

module.exports = postEmail;
