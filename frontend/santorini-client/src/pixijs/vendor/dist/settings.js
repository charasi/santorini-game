/**
 * These are additional @pixi/src options.
 *
 * This settings should not be changed after the renderer has initialized; otherwise, the behavior
 * is undefined.
 */
export const settings = {
    /** The default number of textures per src in a src composite. */
    TEXTURES_PER_TILEMAP: 16,
    /** The scaling mode of the combined texture tiling. */
    TEXTILE_SCALE_MODE: "linear",
    /** This will enable 32-bit index buffers. It's useful when you have more than 16K tiles. */
    use32bitIndex: false,
};
// @deprecated
export const Constant = settings;
