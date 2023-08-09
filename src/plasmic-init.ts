import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "vdVegr6NvnELgfB7Bzi3uo",  // ID of a project you are using
      token: "RipVmbbHWGhwI6emamCnEjZ40jOpCcznY52wdPcei42iDfsWxyTNJnfCy7DALnIeyFkyzeuXA1OtflJqqg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
