/**
 * Cloudinary Media Asset Registry & Helper
 * Maps all site images, heroes, and videos to Cloudinary CDN endpoints.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'j66ihmue';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Returns a high-performance Cloudinary CDN URL for images with auto format & quality optimization.
 *
 * @param publicId - Cloudinary asset public ID.
 * @returns Fully-qualified Cloudinary image delivery URL.
 */
export function getCloudinaryImageUrl(publicId: string): string {
  return `${CLOUDINARY_BASE_URL}/image/upload/f_auto,q_auto/${publicId}`;
}

/**
 * Returns a high-performance Cloudinary CDN URL for progressive MP4 video playback.
 *
 * @param publicId - Cloudinary asset public ID.
 * @returns Fully-qualified Cloudinary video streaming URL.
 */
export function getCloudinaryVideoUrl(publicId: string): string {
  const cleanId = publicId.replace(/\.(mp4|mov|webm)$/i, '');
  return `${CLOUDINARY_BASE_URL}/video/upload/q_auto/${cleanId}.mp4`;
}

/**
 * Returns an auto-generated video poster thumbnail from the first frame of the video.
 *
 * @param publicId - Cloudinary asset public ID.
 * @returns Fully-qualified Cloudinary video poster image URL.
 */
export function getCloudinaryVideoPosterUrl(publicId: string): string {
  const cleanId = publicId.replace(/\.(mp4|mov|webm)$/i, '');
  return `${CLOUDINARY_BASE_URL}/video/upload/so_0,f_auto,q_auto/${cleanId}.jpg`;
}

/**
 * Global Site Asset Dictionary
 */
export const siteAssets = {
  // Brand & Logos
  logos: {
    whiteLogo: getCloudinaryImageUrl('phidelt-site/branding/white-logo'),
    whiteLogoNoLetters: getCloudinaryImageUrl('phidelt-site/branding/white-logo-no-letters'),
    nuLogo: getCloudinaryImageUrl('phidelt-site/branding/nuphidelts-logo'),
  },

  // Homepage
  home: {
    heroBg: getCloudinaryImageUrl('phidelt-site/home/formal-flick'),
    storyImage: getCloudinaryImageUrl('phidelt-site/home/coop-and-jc'),
    brothersImage: getCloudinaryImageUrl('phidelt-site/home/homepage-brothers'),
    philoImage: getCloudinaryImageUrl('phidelt-site/home/homepage-philo'),
  },

  // Background Heroes
  heroes: {
    brothersBg: getCloudinaryImageUrl('phidelt-site/heroes/brothers-bg'),
    rushBg: getCloudinaryImageUrl('phidelt-site/heroes/rush-bg'),
    impactBg: getCloudinaryImageUrl('phidelt-site/heroes/impact-bg'),
    aboutBg: getCloudinaryImageUrl('phidelt-site/heroes/about-bg'),
  },

  // About Page
  about: {
    academics: getCloudinaryImageUrl('phidelt-site/about/about-academics'),
    social: getCloudinaryImageUrl('phidelt-site/about/about-social'),
    philo: getCloudinaryImageUrl('phidelt-site/about/about-philo'),
    history: getCloudinaryImageUrl('phidelt-site/about/history-image'),
    brotherhood1: getCloudinaryImageUrl('phidelt-site/about/about-brotherhood1'),
    brotherhood2: getCloudinaryImageUrl('phidelt-site/about/about-brotherhood2'),
    brotherhood3: getCloudinaryImageUrl('phidelt-site/about/about-brotherhood3'),
    brotherhood4: getCloudinaryImageUrl('phidelt-site/about/about-brotherhood4'),
  },

  // Impact Page
  impact: {
    liveLikeLou: getCloudinaryImageUrl('phidelt-site/impact/impact-livelikelou'),
    ironPhi: getCloudinaryImageUrl('phidelt-site/impact/impact-ironphi'),
    alsWalk: getCloudinaryImageUrl('phidelt-site/impact/impact-alswalk'),
    philoWeek: getCloudinaryImageUrl('phidelt-site/impact/impact-philoweek'),
    greekSing: getCloudinaryImageUrl('phidelt-site/impact/impact-greeksing'),
    relay: getCloudinaryImageUrl('phidelt-site/impact/impact-relay'),
    concert: getCloudinaryImageUrl('phidelt-site/impact/70-backyard-concert'),
  },

  // Rush Videos
  rush: {
    spring25Video: getCloudinaryVideoUrl('phidelt-site/videos/springrush25'),
    spring25Poster: getCloudinaryVideoPosterUrl('phidelt-site/videos/springrush25'),
    fall25Video: getCloudinaryVideoUrl('phidelt-site/videos/fallrush25'),
    fall25Poster: getCloudinaryVideoPosterUrl('phidelt-site/videos/fallrush25'),
    spring26Video: getCloudinaryVideoUrl('phidelt-site/videos/springrush26'),
    spring26Poster: getCloudinaryVideoPosterUrl('phidelt-site/videos/springrush26'),
  },
};

export default siteAssets;
