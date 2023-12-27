import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "qDQMGpbhLZRyqmA1pt1z2M",  // ID of a project you are using
      token: "K0L5ub1CfaqzkuDJVi30YRk7GV5Wy3vlgNP6NKqM1pNw0BB9k0eRBbLiTgaCmAZzPt7txeozRSI5uZAg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
