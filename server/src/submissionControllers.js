import prisma from "../db.js";

const createSubmission = async (req, res) => {

  const { username, codeLanguage, stdin, sourceCode } = req.body;

  try {
    const submission = await prisma.submission.create({
      data: {
        username,
        codeLanguage,
        stdin,
        sourceCode,
      },
    });

    if (!submission) throw new Error("try again later, this was our fault")

    res.status(200).json({
      message: "your submission have been stored",
      submission
    });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }

};

const getAllSubmissions = async (_, res) => {
  res.status(200).json({ message: "here are all your submissions" });
}

export { createSubmission, getAllSubmissions }
