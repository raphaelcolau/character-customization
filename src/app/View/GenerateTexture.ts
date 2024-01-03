import * as THREE from 'three';
import { Character } from '../../type/type';
import { hairs, eyes, eyesBrown, beards, skinShape } from '../_assets/assets';


async function loadImageAndDraw(toDraw: string, ctx: CanvasRenderingContext2D, color?: string) {

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = toDraw ? toDraw : '';
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 64, 64);
        resolve(ctx);
      };
      img.onerror = reject;
    });
  }

export async function generateTexture(custom: Character): Promise<THREE.CanvasTexture> {
    return new Promise((resolve, reject) => {
        const hairUrl = hairs.find(hair => hair.key === custom.hair.element)?.assets;
        const eyesUrl = eyes.find(eyes => eyes.key === custom.eyes.element)?.assets;
        const eyesBrownUrl = eyesBrown.find(eyesBrown => eyesBrown.key === custom.eyesbrows.element)?.assets;
        const beardsUrl = beards.find(beards => beards.key === custom.beard.element)?.assets;
        const skinUrl = skinShape.find(skin => skin.key === custom.skin.element)?.assets;

        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            if (skinUrl && hairUrl && eyesUrl && eyesBrownUrl && beardsUrl) {
                loadImageAndDraw(skinUrl, ctx).then(() => {
                    loadImageAndDraw(hairUrl, ctx).then(() => {
                        loadImageAndDraw(eyesUrl, ctx).then(() => {
                            loadImageAndDraw(eyesBrownUrl, ctx).then(() => {
                                loadImageAndDraw(beardsUrl, ctx).then(() => {
                                    const texture = new THREE.CanvasTexture(canvas);
                                    texture.needsUpdate = true;
                                    resolve(texture);
                                });
                            });
                        });
                    });
                });
            }
        }
    });

}