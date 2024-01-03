import * as THREE from 'three';
import { Character } from '../../type/type';
import { hairs, eyes, eyesBrown, beards, skinShape } from '../_assets/assets';


async function loadImageAndDraw(toDraw: string, ctx: CanvasRenderingContext2D, color?: string, mixType?: GlobalCompositeOperation) {
    return new Promise((resolve, reject) => {
        const buffer = new Image();
        buffer.src = toDraw;
        buffer.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctxBuffer = canvas.getContext('2d');
            if (ctxBuffer) {
                ctxBuffer.drawImage(buffer, 0, 0, 64, 64);

                const img = new Image();
                img.src = toDraw;
                img.onload = () => {
                    if (color && mixType) {
                        const tempCanvas = document.createElement('canvas');
                        tempCanvas.width = 64;
                        tempCanvas.height = 64;
                        const tempCtx = tempCanvas.getContext('2d');
                        if (tempCtx) {
                            // tempCtx.fillStyle = color;
                            // tempCtx.fillRect(0, 0, 64, 64);

                            // Loop every pixels of img
                            for (let i = 0; i < 64; i++) {
                                for (let j = 0; j < 64; j++) {
                                    //Get the pixel color
                                    const pixel = ctxBuffer.getImageData(i, j, 1, 1).data;

                                    //If pixel is not transparent
                                    if (pixel[3] !== 0) {
                                        //Apply the color
                                        tempCtx.fillStyle = color;
                                        tempCtx.fillRect(i, j, 1, 1);
                                    }
                                }
                            }

                            tempCtx.globalCompositeOperation = mixType;
                            tempCtx.drawImage(img, 0, 0, 64, 64);


                            ctx.drawImage(tempCanvas, 0, 0, 64, 64);
                        }
                    } else {
                        ctx.drawImage(img, 0, 0, 64, 64);
                    }
                    console.log(ctx.canvas.toDataURL());
                    resolve(ctx);
                };
                img.onerror = reject;
            }
        };
        buffer.onerror = reject;
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
                loadImageAndDraw(skinUrl, ctx, custom.skin.color, 'color-burn').then(() => {
                    loadImageAndDraw(hairUrl, ctx, custom.hair.color, 'color-burn').then(() => {
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