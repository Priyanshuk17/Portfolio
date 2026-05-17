import { getLeetCodeStats } from "../leetCodeService.js";
import fetchGithubStats from "../github.Service.js";

export const getDashboardStats = async (req, res) => {
  try {

    const leetcode = await getLeetCodeStats("Priyanshuke_0009");

    const github = await fetchGithubStats("PriyanshuK17");

    return res.status(200).json({
      success: true,
      data: {
        leetcode,
        github,
      },
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

