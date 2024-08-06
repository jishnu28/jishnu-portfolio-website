import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '87FT3dZPX1VsULQZcyHURa', // ID of a project you are using
      token:
        'TLvnp2eJ4Q8Qu6ZmPygyhgO3qo03rkwUKmEPmj2QHDVDEz80cEq8MV5I5hzLCn9VmoDKRj1Rx4zg0DAvIpn1Tw', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
