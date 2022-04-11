const express = require('express');
const { User } = require('../models/user');
const { Tokens } = require('../models/token');
const _ = require('lodash');
const upload = require('../multer');
const cloudinary = require('../cloudinary');
const bcryptjs = require('bcryptjs');
const router = express.Router();
const { sendEmail } = require('../utils/index');
const crypto = require('crypto');

router.get('/user', async (req, res) => {
  const user = await User.find();
  if (!user) return res.status(404).send('No User Found');

  res.status(200).send(user)
})

router.post('/user', upload.single('file'), async (req, res) => {
  const { email, username, password, role } = req.body
  const uploader = async (path) => await cloudinary.upload(path, "File")

  const file = req.file;
  const { url: profileUrl } = await uploader(file.path);

  let user = await User.findOne({ email }) || await User.findOne({ username })
  if (user) return res.status(400).send('User already registered');

  user = new User({
    username,
    email,
    password,
    role,
    profileUrl
  })

  const salt = await bcryptjs.genSalt(10);
  user.password = await bcryptjs.hash(user.password, salt);

  await user.save();
  await sendVerificationEmail(user, req, res);

  const token = user.generateAuthToken();

  res
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'username', 'email', 'role', 'profileUrl']))

})


// User Save

async function sendVerificationEmail(users, req, res) {
  try {
    let user = await User.findById(users._id);
    if (!user) return res.status(404).send('Not Found User');

    let payload = new Tokens({
      user,
      token: crypto.randomBytes(20).toString('hex')
    })

    // Save the verification token
    await payload.save();

    let subject = "Account Verification Token";
    let to = users.email;
    let from = process.env.FROM_EMAIL;
    // let link = "links to";
    let link = "http://" + req.headers.host + "/api/auth/verify/" + payload.token;
    let html = `<p>Hi ${users.username}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                  <br><p>If you did not request this, please ignore this email.</p>`;
    await sendEmail({ to, from, subject, html });

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = router;
