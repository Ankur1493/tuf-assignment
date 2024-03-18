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

  try {
    const submissions = await prisma.submission.findMany({ orderBy: { submittedAt: "desc" } });

    if (submissions.length === 0) {
      return res.status(200).json({
        message: "You are the first one here"
      })
    }

    return res.status(200).json({
      message: "here's your submissions",
      submissions
    })

  } catch (err) {
    res.status(400).json({ err: err.message });
  }

}

export { createSubmission, getAllSubmissions }
