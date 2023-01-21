import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rPgURLJSo7wfHDtXZS9B9T",  // ID of a project you are using
      token: "H7KS34yAA64rvvRdQ9byfI5brun0cLg79mSWOn9LVmgmz1EVltlnKBHUeY565JjXFk9iEiWscFACd2e5cSwnw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})