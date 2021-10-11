const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = '0nf29mpdy4munhp334fckz9ud';

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}
showcase.addEventListener('load', async function() {
  let sdk;
  try {
    sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
    
  }
  catch(e) {
    console.error(e);
    return;
  }
  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
  

  const modelNode = await sdk.Scene.createNode();
  
// Store the fbx component since we will need to adjust it in the next step.
const fbxComponent = modelNode.addComponent(sdk.Scene.Component.FBX_LOADER, {
  url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/fbx/stanford-bunny.fbx',
});
console.log("test")

fbxComponent.inputs.localScale = {
  x: 0.00002,
  y: 0.00002,
  z: 0.00002
};
console.log("test")
modelNode.start();

});