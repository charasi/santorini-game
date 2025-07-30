// Prevent SCALE_MODES from becoming lazy import in Constant.ts - which causes a import() in the declaration file,
// which causes API extractor to fail https://github.com/microsoft/rushstack/issues/2140
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { extensions } from 'pixi.js';
import { GlTilemapAdaptor } from './gl_tilemap.js';
import { GpuTilemapAdaptor } from './gpu_tilemap.js';
import { TilemapPipe } from './TilemapPipe.js';
export * from './CompositeTilemap.js';
export * from './settings.js';
export * from './Tilemap.js';
export * from './TilemapGeometry.js';
export * from './TilemapPipe.js';
extensions.add(TilemapPipe);
extensions.add(GlTilemapAdaptor);
extensions.add(GpuTilemapAdaptor);
