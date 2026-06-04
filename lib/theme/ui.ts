/** ====================
 *  LAYOUT & CONTAINERS
 *  ==================== */

/** Horizontal padding for pages/sections */
export const PAGE_PADDING = "px-2 sm:px-6 lg:px-8";
export const PAGE_MAX_WIDTH = "mx-auto"; // Full width, no max constraint

/** Container variants with max-width */
export const CONTAINER = `${PAGE_PADDING} ${PAGE_MAX_WIDTH}`;
export const CONTAINER_FULL = PAGE_PADDING; // Full width with padding only
export const CONTAINER_NAV_SPACER = "pt-6";

/** Centered containers by size */
export const CONTAINER_SM = "max-w-2xl mx-auto";
export const CONTAINER_MD = "max-w-4xl mx-auto";
export const CONTAINER_LG = "max-w-7xl mx-auto";

/** CTA section container (centered, text-center, with spacing) */
export const CONTAINER_CTA = "max-w-4xl mx-auto text-center space-y-6";

/** ====================
 *  SECTIONS
 *  ==================== */

/** Standard section padding */
export const SECTION_SPACING = "py-8 md:py-12";

/** Section with horizontal padding */
export const SECTION = "px-4 sm:px-6 lg:px-8 py-16 md:py-24";

/** Hero section with extra padding */
export const SECTION_HERO = "px-4 sm:px-6 lg:px-8 py-12 md:py-28";

/** CTA/Dark section with background */
export const SECTION_CTA =
  "px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[--bazarmio-darker]";

/** Extra padding for mobile nav */
export const MOBILE_NAV_CLEARANCE = "pb-20 md:pb-0";

/** Centered full-screen container */
export const FULL_SCREEN_CENTER =
  "min-h-screen flex items-center justify-center";

/** ====================
 *  CARDS & SURFACES
 *  ==================== */

/** Standard card style */
export const CARD = "rounded-2xl bg-card shadow-lg border";

/** Dark interactive card with hover effect */
export const CARD_DARK_INTERACTIVE =
  "bg-[--bazarmio-darker] border-white/5 hover:border-lime/20 transition-all duration-300";

/** Darker variant of interactive card */
export const CARD_DARKER_INTERACTIVE =
  "bg-[--bazarmio-dark] border-gray-700 hover:border-lime/50 transition-all";

/** ====================
 *  GRIDS
 *  ==================== */

/** Responsive product grid */
export const PRODUCT_GRID =
  "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6";

/** Features grid (3 columns) */
export const GRID_FEATURES =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8";

/** ====================
 *  SHEET COMPONENTS
 *  ==================== */

/** Sheet content layout */
export const SHEET_CONTENT = "w-full sm:w-96 flex flex-col";
export const SHEET_BODY = "flex-1 overflow-y-auto px-6 py-16";

/** ====================
 *  BUTTONS
 *  ==================== */

/** Primary CTA button (large, for CTA sections) */
export const BTN_PRIMARY_CTA =
  "bg-lime text-black hover:bg-[#a8d824] font-semibold text-lg px-10 h-14";

/** Primary hero button (responsive sizing) */
export const BTN_PRIMARY_HERO =
  "bg-lime text-black hover:bg-[#a8d824] font-semibold text-base md:text-lg px-8 h-12 md:h-14 min-w-[160px]";
/** Secondary hero button (outline style) */
export const BTN_SECONDARY_HERO =
  "border-gray-600 text-white hover:bg-bazarmio-gray/20 hover:border-lime/50 hover:text-white focus-visible:text-white font-semibold text-base md:text-lg px-8 h-12 md:h-14 min-w-[160px]";

/** ====================
 *  NAVIGATION
 *  ==================== */

/** Navigation container with padding */
export const NAV_CONTAINER = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

/** Navigation link (desktop) - used inside pill container */
export const NAV_LINK =
  "inline-flex items-center px-3 py-1 min-h-0 min-w-0 text-sm font-medium transition-colors duration-200";

/** Navigation link (mobile overlay) */
export const NAV_LINK_MOBILE =
  "text-3xl font-semibold transition-all duration-200";

/** ====================
 *  SPACING UTILITIES
 *  ==================== */

/** Vertical spacing */
export const SPACE_Y_6 = "space-y-6";
export const SPACE_Y_8 = "space-y-8";

/** Bottom margin for section headers */
export const SECTION_HEADER_MARGIN = "mb-12 md:mb-16";
